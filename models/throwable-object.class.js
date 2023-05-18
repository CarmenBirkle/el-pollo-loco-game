class ThrowableOject extends MovableObject {
  otherDirection;
  bottleHit = false;
  THROW_BOTTLE = [
    'img/6_salsa_bottle/bottle_rotation/1_bottle_rotation.png',
    'img/6_salsa_bottle/bottle_rotation/2_bottle_rotation.png',
    'img/6_salsa_bottle/bottle_rotation/3_bottle_rotation.png',
    'img/6_salsa_bottle/bottle_rotation/4_bottle_rotation.png',
  ];
  IMAGES_BOTTLES_SPLASH = [
    'img/6_salsa_bottle/bottle_rotation/bottle_splash/1_bottle_splash.png',
    'img/6_salsa_bottle/bottle_rotation/bottle_splash/2_bottle_splash.png',
    'img/6_salsa_bottle/bottle_rotation/bottle_splash/3_bottle_splash.png',
    'img/6_salsa_bottle/bottle_rotation/bottle_splash/4_bottle_splash.png',
    'img/6_salsa_bottle/bottle_rotation/bottle_splash/5_bottle_splash.png',
    'img/6_salsa_bottle/bottle_rotation/bottle_splash/6_bottle_splash.png',
  ];

  constructor(x, y, otherDirection) {
    super().loadImage(
      'img/6_salsa_bottle/bottle_rotation/1_bottle_rotation.png'
    );
    this.loadImages(this.THROW_BOTTLE);
    this.loadImages(this.IMAGES_BOTTLES_SPLASH);
    this.x = x;
    this.y = y;
    this.otherDirection = otherDirection;
    this.height = 70;
    this.width = 50;
    this.throw();
    this.animate();
  }
  /**
   * Throws the object and initiates its movement.
   */
  throw() {
    this.speedY = 10;
    this.applyGravity();
    setInterval(() => {
      if (this.otherDirection === true) {
        this.x -= 20;
      } else {
        this.x += 20;
      }
    }, 40);
  }

  animate() {
    setInterval(() => {
      if (this.bottleSplash()) {
        this.playAnimation(this.IMAGES_BOTTLES_SPLASH);
      } else {
        this.playAnimation(this.THROW_BOTTLE);
      }
    }, 100);
  }
  /**
   * Checks if bottle should be splashed. With bottle is above ground or hit something.
   * @returns true if bottle should splashed
   */
  bottleSplash() {
    return this.posY > 260 || this.bottleHit;
  }
}
