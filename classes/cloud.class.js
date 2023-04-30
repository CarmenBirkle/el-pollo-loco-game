/**
 * Class to create clouds with moving animation and random position
 *
 */
class Cloud extends MovableObject {
  y = 40;
  height = 250;
  width = 500;

  constructor() {
    super().loadImage('img/5_background/layers/4_clouds/1.png');
    this.x = 400 + Math.random() * 3000;
    this.animate();
  }

  /**
   * Function to animate moving clouds
   *
   */
  animate() {
    setInterval(() => {
      this.moveLeft();
    }, 1000 / 60);
  }
}
