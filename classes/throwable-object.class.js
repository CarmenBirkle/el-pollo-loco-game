class ThrowableOject extends MovableObject {
  otherDirection;
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

  throw() {
    this.speedY = 10; // Höhe des Wurfs 30
    this.applyGravity();
    setInterval(() => {
      if (this.otherDirection === true) {
        this.x -= 20;
        console.log('true', this.otherDirection);
      } else {
        this.x += 20;
        console.log('false', this.otherDirection);
      }
    }, 40);
  }

  animate() {
    setInterval(() => {
      this.playAnimation(this.THROW_BOTTLE);
    }, 100);
  }

  //   animate() {
  //     setInterval(() => {
  //       if (this.y > 250 || this.hurtEndboss()) {
  //         this.playAnimation(this.IMAGES_BOTTLES_SPLASH);
  //         this.x += 5;
  //       } else {
  //         this.playAnimation(this.IMAGES_BOTTLES_ROTATION);
  //       }
  //     }, 80);
  //   }
}
