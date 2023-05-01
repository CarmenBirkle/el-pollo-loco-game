class Coin extends MovableObject {
  height = 100;
  width = 100;

  offset = {
    top: 80,
    right: 30,
    bottom: 75,
    left: 25,
  };

  COIN_ANIM = ['img/8.Coin/Moneda1.png', 'img/8.Coin/Moneda2.png'];

  constructor() {
    super().loadImage('img/8.Coin/Moneda1.png');
    this.loadImages(this.COIN_ANIM);
    this.x = 200 + Math.random() * 2500;
    this.y = 50 + Math.random() * 300;
    this.animate();
  }

  /**
   * calls each image in array
   *
   */
  animate() {
    setInterval(() => {
      this.playAnimation(this.COIN_ANIM);
    }, 1000 / 5);
  }
}
