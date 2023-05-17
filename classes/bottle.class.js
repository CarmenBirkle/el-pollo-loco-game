/**
 * @class Bottle - represents the bottle on the ground with animation
 */
class Bottle extends MovableObject {
  height = 80;
  width = 60;

  IMAGE_BOTTLE = [
    'img/6_salsa_bottle/2_salsa_bottle_on_ground.png',
    'img/6_salsa_bottle/1_salsa_bottle_on_ground.png',
  ];

  constructor() {
    super().loadImage('img/6_salsa_bottle/2_salsa_bottle_on_ground.png');
    this.loadImages(this.IMAGE_BOTTLE);
    this.x = 200 + Math.random() * 3000;
    this.y = 360;
    this.animate();
  }

  /**
   * animate the bottle on the ground
   */
  animate() {
    setRunningIntervals(() => {
      this.playAnimation(this.IMAGE_BOTTLE);
    }, 500);
  }
}
