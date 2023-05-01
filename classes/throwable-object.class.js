class ThrowableOject extends MovableObject {
  THROW_BOTTLE = [
    'img/6_salsa_bottle/bottle_rotation/1_bottle_rotation.png',
    'img/6_salsa_bottle/bottle_rotation/2_bottle_rotation.png',
    'img/6_salsa_bottle/bottle_rotation/3_bottle_rotation.png',
    'img/6_salsa_bottle/bottle_rotation/4_bottle_rotation.png',
  ];

  constructor(x, y) {
    super().loadImage(
      'img/6_salsa_bottle/bottle_rotation/1_bottle_rotation.png'
    );
    this.loadImages(this.THROW_BOTTLE);
    this.x = x;
    this.y = y;
    this.height = 70;
    this.width = 50;
    this.trow();
    this.animate();
  }

  trow() {
    this.speedY = 10;
    this.applyGravity();
    setInterval(() => {
      this.x += 20;
    }, 40);
  }

  animate() {
    setInterval(() => {
      this.playAnimation(this.THROW_BOTTLE);
    }, 100);
  }
}
