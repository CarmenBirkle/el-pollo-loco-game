/**
 * @class BabyChicken - create the baby chickens with random speed and position
 */
class BabyChicken extends MovableObject {
  y = 380;
  height = 50;
  width = 50;
  babyChickenDead = false;

  IMAGES_WALKING = [
    'img/3_enemies_chicken/chicken_small/1_walk/1_w.png',
    'img/3_enemies_chicken/chicken_small/1_walk/2_w.png',
    'img/3_enemies_chicken/chicken_small/1_walk/3_w.png',
  ];

  IMAGES_DEAD = ['img/3_enemies_chicken/chicken_small/2_dead/dead.png'];

  constructor() {
    super().loadImage('img/3_enemies_chicken/chicken_small/1_walk/1_w.png');
    this.loadImages(this.IMAGES_WALKING);
    this.x = 500 + Math.random() * 2200;
    this.speed = 0.15 + Math.random() * 0.25;
    this.animate();
  }
  /**
   * @method moveLeft - move the baby chicken to the left
   */

  //   animate() {
  //     setInterval(() => {
  //       this.moveLeft();
  //     }, 1000 / 60);

  //     setInterval(() => {
  //       if (this.babyChickenDead) {
  //         this.loadImage(this.IMAGES_DEAD);
  //         this.speed = 0;
  //       } else {
  //         this.playAnimation(this.IMAGES_WALKING);
  //       }
  //     }, 1000 / 10);
  //   }
  // }

  animate() {
    setRunningIntervals(() => {
      this.moveLeft();
    }, 1000 / 60);

    setRunningIntervals(() => {
      if (this.babyChickenDead) {
        this.loadImage(this.IMAGES_DEAD);
        this.speed = 0;
      } else {
        this.playAnimation(this.IMAGES_WALKING);
      }
    }, 1000 / 10);
  }
}
