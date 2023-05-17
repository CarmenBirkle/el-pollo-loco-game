/**
 * @class Endboss - generates the endboss with its properties and methods for
 *  dead, hurt, walking, angry and alert.
 * @extends MovableObject
 * @property {number} height - height of the endboss
 * @property {number} width - width of the endboss
 * @property {number} y - y position of the endboss
 * @property {number} x - x position of the endboss
 * @property {number} energy - energy of the endboss
 * @property {boolean} endboss_dead - boolean to check if endboss is dead
 * */

class Endboss extends MovableObject {
  height = 400;
  width = 250;
  y = 50;
  x = 2500;
  world;
  energy = 25;
  endboss_dead = false;
  speed = 8;

  IMAGES_WALKING = [
    'img/4_enemie_boss_chicken/1_walk/G1.png',
    'img/4_enemie_boss_chicken/1_walk/G2.png',
    'img/4_enemie_boss_chicken/1_walk/G3.png',
    'img/4_enemie_boss_chicken/1_walk/G4.png',
  ];

  IMAGES_HURT = [
    'img/4_enemie_boss_chicken/4_hurt/G21.png',
    'img/4_enemie_boss_chicken/4_hurt/G22.png',
    'img/4_enemie_boss_chicken/4_hurt/G23.png',
  ];

  IMAGES_DEAD = [
    'img/4_enemie_boss_chicken/5_dead/G24.png',
    'img/4_enemie_boss_chicken/5_dead/G25.png',
    'img/4_enemie_boss_chicken/5_dead/G26.png',
  ];

  IMAGES_ANGRY = [
    'img/4_enemie_boss_chicken/3_attack/G13.png',
    'img/4_enemie_boss_chicken/3_attack/G14.png',
    'img/4_enemie_boss_chicken/3_attack/G15.png',
    'img/4_enemie_boss_chicken/3_attack/G16.png',
    'img/4_enemie_boss_chicken/3_attack/G17.png',
    'img/4_enemie_boss_chicken/3_attack/G18.png',
    'img/4_enemie_boss_chicken/3_attack/G19.png',
    'img/4_enemie_boss_chicken/3_attack/G20.png',
  ];

  IMAGE_ALERT = [
    'img/4_enemie_boss_chicken/2_alert/G5.png',
    'img/4_enemie_boss_chicken/2_alert/G6.png',
    'img/4_enemie_boss_chicken/2_alert/G7.png',
    'img/4_enemie_boss_chicken/2_alert/G8.png',
    'img/4_enemie_boss_chicken/2_alert/G9.png',
    'img/4_enemie_boss_chicken/2_alert/G10.png',
    'img/4_enemie_boss_chicken/2_alert/G11.png',
    'img/4_enemie_boss_chicken/2_alert/G12.png',
  ];

  constructor() {
    super().loadImage('img/4_enemie_boss_chicken/3_attack/G13.png');
    this.loadImages(this.IMAGES_WALKING);
    this.loadImages(this.IMAGES_HURT);
    this.loadImages(this.IMAGES_DEAD);
    this.loadImages(this.IMAGES_ANGRY);
    this.animate();
  }

  /**
   * Adjust the end boss images according to its actions or live-state.
   *
   */
  animate() {
    setRunningIntervals(() => {
      if (this.isHurt()) {
        this.playAnimation(this.IMAGES_HURT);
      } else if (this.isDead()) {
        this.letEndbossDie();
      } else {
        if (this.energy > 20) {
          this.playAnimation(this.IMAGES_ANGRY);
        } else if (this.energy <= 20) {
          this.move();
        }
      }
    }, 1000 / 5);
  }

  // startWalkAngryAnimation() {
  //   this.move();
  //   this.speed = 7;
  //   setTimeout(() => {
  //     // Animation 2: playAnimation(this.IMAGES_ANGRY)
  //     this.playAnimation(this.IMAGES_ANGRY);
  //     this.speed = 0;

  //     // Setzen einer Zeitverzögerung für die erneute Anzeige der Animationen
  //     setTimeout(() => {
  //       // Wiederholen der Animationen
  //       this.startWalkAngryAnimation();
  //     }, 5000); // Warten Sie 2 Sekunden, bevor Sie die Animationen wiederholen
  //   }, 5000); // Warten Sie 2 Sekunden, bevor Sie zur nächsten Animation wechseln
  // }

  move() {
    this.playAnimation(this.IMAGES_WALKING);
    if (this.canWalkRight()) {
      this.moveRight();
      this.otherDirection = true;
    } else if (this.canWalkLeft()) {
      this.moveLeft();
      this.otherDirection = false;
    }
  }

  letEndbossDie() {
    setTimeout(() => {
      this.speed = 50;
      this.moveRight();
      this.playAnimation(this.IMAGES_DEAD);
    }, 500);
    win();
  }

  canWalkRight() {
    return (
      this.distanceInBetween() > -700 &&
      this.distanceInBetween() < -200 &&
      !this.isDead()
    );
  }

  canWalkLeft() {
    return (
      this.distanceInBetween() < 500 &&
      this.distanceInBetween() > 25 &&
      !this.isDead()
    );
  }

  distanceInBetween() {
    return this.x - world.character.x;
  }
}
