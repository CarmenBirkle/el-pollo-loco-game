/**
 * @class Chicken - to create chicken objects with moving animation and random position
 */
class Chicken extends MovableObject {
  y = 350; // 360
  height = 80; // 60
  width = 50; // 70
  chickenDead = false;
  offset = {
    top: 10,
    right: 10,
    bottom: 10,
    left: 10,
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
  //   animate() {
  //     setInterval(() => {
  //       this.moveLeft();
  //     }, 1000 / 60);

  //     setInterval(() => {
  //       if (this.chickenDead) {
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
      if (this.chickenDead) {
        this.loadImage(this.IMAGES_DEAD);
        this.speed = 0;
      } else {
        this.playAnimation(this.IMAGES_WALKING);
      }
    }, 1000 / 10);
  }
}
