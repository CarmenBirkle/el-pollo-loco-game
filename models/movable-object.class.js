class MovableObject extends DrawableObject {
  speed = 0.15;
  speedY = 0;
  acceleration = 1.5;
  energy = 100;
  lastHit = 0;

  /**
   * makes object jump/fall down with gravity and acceleration (speed of falling)
   */
  applyGravity() {
    setInterval(() => {
      if (this.isAboveGround() || this.speedY > 0) {
        this.y -= this.speedY;
        this.speedY -= this.acceleration;
      }
    }, 1000 / 30);
  }

  /**
   * check collision in all four frame corners (square)
   */
  // isColliding(object) {
  //   return (
  //     this.x + this.width > object.x &&
  //     this.y + this.height > object.y &&
  //     this.x < object.x &&
  //     this.y < object.y + object.height
  //   );
  // }

  isColliding(obj) {
    return (
      this.x + this.width - this.offset.right > obj.x + obj.offset.left &&
      this.y + this.height - this.offset.bottom >
        obj.y + obj.offset.top &&
      this.x + this.offset.left < obj.x + obj.width - obj.offset.right &&
      this.y + this.offset.top < obj.y + obj.height - obj.offset.bottom
    );
  }

  /**
   * check is object is falling down
   */
  isAboveGround() {
    if (this instanceof ThrowableOject) {
      return true;
    } else {
      return this.y < 170;
    }
  }

  /**
   * Calculates when an object falls.
   * @returns {boolean} - Returns true if the object is falling.
   */
  isFalling() {
    return this.speedY < 0 && this.isAboveGround();
  }

  /**
   * calls each image in array to play animation with modulo oparator
   */
  playAnimation(images) {
    let i = this.currentImage % images.length;
    let path = images[i];
    this.img = this.imageCache[path];
    this.currentImage++;
  }

  /**
   * object moves to the right according to speed settings (speed of movement)
   */
  moveRight() {
    this.x += this.speed;
  }

  /**
   * object moves to the left according to speed settings (speed of movement)
   */
  moveLeft() {
    this.x -= this.speed;
  }

  /**
   * object jumps changing y-axis position
   */
  jump() {
    this.speedY = 20;
  }

  /**
   * Applies the specified damage to the object.
   * @param {number} damage - The amount of damage to apply.
   */
  hit(damage) {
    this.energy -= damage;
    if (this.energy < 0) {
      this.energy = 0;
    } else {
      this.lastHit = new Date().getTime();
    }
  }

  /**
   * Checks if the object is still considered "hurt" based on the time since the last hit.
   * @returns {boolean} - Indicates whether the object is still hurt.
   */
  isHurt() {
    let timepassed = new Date().getTime() - this.lastHit; /* Difference in ms */
    timepassed = timepassed / 1000; /* Difference in s */
    return timepassed < 1;
  }

  /**
   * Checks if the object is dead based on its energy level.
   * @returns {boolean} - Indicates whether the object is dead.
   */
  isDead() {
    return this.energy == 0;
  }
}
