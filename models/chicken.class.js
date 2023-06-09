/**
 * @class Chicken - to create chicken objects with moving animation and random position
 */
class Chicken extends MovableObject {
  y = 350;
  height = 80;
  width = 50;
  chickenDead = false;
  offset = {
    top: 2,
    right: 0,
    bottom: 2,
    left: 0,
  };

  IMAGES_WALKING = [
    'img/3_enemies_chicken/chicken_normal/1_walk/1_w.png',
    'img/3_enemies_chicken/chicken_normal/1_walk/2_w.png',
    'img/3_enemies_chicken/chicken_normal/1_walk/3_w.png',
  ];

  IMAGES_DEAD = ['img/3_enemies_chicken/chicken_normal/2_dead/dead.png'];

  /**
   * Constructor to create chicken objects with random position and variable speed for each chicken
   */
  constructor() {
    super().loadImage('img/3_enemies_chicken/chicken_normal/1_walk/1_w.png');
    this.loadImages(this.IMAGES_WALKING);
    this.x = 400 + Math.random() * 3000;
    this.speed = 0.15 + Math.random() * 0.5;
    this.animate();
  }

  /**
   * Update the images and speed of the chickens based on their actions or live-state.
   *
   */
  animate() {
    setRunningIntervals(() => {
      this.moveLeft();
    }, 1000 / 60);

    setRunningIntervals(() => {
      if (this.chickenDead) {
        this.loadImage(this.IMAGES_DEAD);
        this.speed = 0;
      } else {
        this.playAnimation(this.IMAGES_WALKING);
      }
    }, 1000 / 10);
  }
}
