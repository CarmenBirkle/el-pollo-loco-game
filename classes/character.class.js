/**
 * @class Character - represents the main character of the game
 * @extends MovableObject
 * @property {number} y - y position of the character
 * @property {number} height - height of the character
 * @property {number} offset - offset of the character
 * @property {number} world - world of the character
 * @property {number} speed - speed of the character
 * @property {Audio} walkingSound - sound of the character walking
 * @property {Audio} jumpSound - sound of the character jumping
 */
class Character extends MovableObject {
  y = 170;

  offset = {
    top: 110,
    right: 30,
    bottom: 5,
    left: 15,
  };
  world;
  speed = 10;
  walkingSound = new Audio('audio/running.mp3');
  jumpSound = new Audio('audio/jump.mp3');
  movementTimer = 0;

  IMAGES_WALKING = [
    'img/2_character_pepe/2_walk/W-21.png',
    'img/2_character_pepe/2_walk/W-22.png',
    'img/2_character_pepe/2_walk/W-23.png',
    'img/2_character_pepe/2_walk/W-25.png',
    'img/2_character_pepe/2_walk/W-24.png',
    'img/2_character_pepe/2_walk/W-26.png',
  ];

  IMAGES_JUMPING = [
    'img/2_character_pepe/3_jump/J-31.png',
    'img/2_character_pepe/3_jump/J-32.png',
    'img/2_character_pepe/3_jump/J-33.png',
    'img/2_character_pepe/3_jump/J-34.png',
    'img/2_character_pepe/3_jump/J-35.png',
    'img/2_character_pepe/3_jump/J-36.png',
    'img/2_character_pepe/3_jump/J-37.png',
    'img/2_character_pepe/3_jump/J-38.png',
    'img/2_character_pepe/3_jump/J-39.png',
  ];

  IMAGES_DEAD = [
    'img/2_character_pepe/5_dead/D-51.png',
    'img/2_character_pepe/5_dead/D-52.png',
    'img/2_character_pepe/5_dead/D-53.png',
    'img/2_character_pepe/5_dead/D-54.png',
    'img/2_character_pepe/5_dead/D-55.png',
    'img/2_character_pepe/5_dead/D-56.png',
    'img/2_character_pepe/5_dead/D-57.png',
  ];

  IMAGES_HURT = [
    'img/2_character_pepe/4_hurt/H-41.png',
    'img/2_character_pepe/4_hurt/H-42.png',
    'img/2_character_pepe/4_hurt/H-43.png',
  ];

  IMAGES_IDLE = [
    'img/2_character_pepe/1_idle/idle/I-1.png',
    'img/2_character_pepe/1_idle/idle/I-2.png',
    'img/2_character_pepe/1_idle/idle/I-3.png',
    'img/2_character_pepe/1_idle/idle/I-4.png',
    'img/2_character_pepe/1_idle/idle/I-5.png',
    'img/2_character_pepe/1_idle/idle/I-6.png',
    'img/2_character_pepe/1_idle/idle/I-7.png',
    'img/2_character_pepe/1_idle/idle/I-8.png',
    'img/2_character_pepe/1_idle/idle/I-9.png',
    'img/2_character_pepe/1_idle/idle/I-10.png',
  ];

  IMAGES_LONG_IDLE = [
    'img/2_character_pepe/1_idle/long_idle/I-11.png',
    'img/2_character_pepe/1_idle/long_idle/I-12.png',
    'img/2_character_pepe/1_idle/long_idle/I-13.png',
    'img/2_character_pepe/1_idle/long_idle/I-14.png',
    'img/2_character_pepe/1_idle/long_idle/I-15.png',
    'img/2_character_pepe/1_idle/long_idle/I-16.png',
    'img/2_character_pepe/1_idle/long_idle/I-17.png',
    'img/2_character_pepe/1_idle/long_idle/I-18.png',
    'img/2_character_pepe/1_idle/long_idle/I-19.png',
    'img/2_character_pepe/1_idle/long_idle/I-20.png',
  ];

  constructor() {
    super().loadImage('img/2_character_pepe/2_walk/W-21.png');
    this.loadImages(this.IMAGES_WALKING);
    this.loadImages(this.IMAGES_JUMPING);
    this.loadImages(this.IMAGES_DEAD);
    this.loadImages(this.IMAGES_HURT);
    this.loadImages(this.IMAGES_IDLE);
    this.loadImages(this.IMAGES_LONG_IDLE);
    this.volumeOfSoundsCaracter();
    this.applyGravity();
    this.animate();
  }

  /**
   * adjust volume of sounds
   *
   */
  volumeOfSoundsCaracter() {
    this.jumpSound.volume = 0.3;
  }

  /**
   * animate the character with two intervals of time
   * one for the movement and the other for the animation
   */
  animate() {
    setInterval(() => {
      this.moveCharacter();
    }, 1000 / 60);

    setInterval(() => {
      this.playAnimations();
    }, 1000 / 10);
  }

  playAnimations() {
    if (this.isDead()) {
      this.playAnimation(this.IMAGES_DEAD);
      setTimeout(() => {
        gameOver();
      }, 2000);
    } else if (this.isHurt()) {
      this.playAnimation(this.IMAGES_HURT);
    } else if (this.isAboveGround()) {
      this.playAnimation(this.IMAGES_JUMPING);
    } else if (this.world.keyboard.RIGHT || this.world.keyboard.LEFT) {
      this.playAnimation(this.IMAGES_WALKING);
    } else if (this.checkMovementTimer()) {
      this.playAnimation(this.IMAGES_LONG_IDLE);
    } else {
      this.playAnimation(this.IMAGES_IDLE);
    }
  }

  /**
   * controlls the variable movementTimer and returns true
   * if the character is not move for 4 sec.
   *    * @returns true
   */
  checkMovementTimer() {
    if (this.movementTimer > 400) {
      return true;
    } else {
      return false;
    }
  }

  moveCharacter() {
    this.walkingSound.pause();
    this.movementTimer += 1;
    if (this.world.keyboard.RIGHT && this.x < this.world.level.level_end_x) {
      this.moveRight();
      this.movementTimer = 0;
      this.walkingSound.play();
      this.otherDirection = false;
    }
    if (this.world.keyboard.LEFT && this.x > 100) {
      this.moveLeft();
      this.movementTimer = 0;
      this.walkingSound.play();
      this.otherDirection = true;
    }
    this.world.camera_x =
      -this.x +
      100; /* every time character is updated, camera/scenario moves in opposite direction */

    if (
      (this.world.keyboard.SPACE || this.world.keyboard.UP) &&
      !this.isAboveGround()
    ) {
      this.jump();
      this.movementTimer = 0;
      this.jumpSound.play();
    }
  }
}
