class MovableObject extends DrawableObject {

    speed = 0.15;
    otherDirection = false;
    speedY = 0;
    acceleration = 1.5; /* jump height  */
    energy = 100;
    lastHit = 0;
    

    /**
     * makes object jump/fall down
     * 
     */
    applyGravity() { 
        setInterval(() => {
            if (this.isAboveGround() || this.speedY > 0) {
                this.y -= this.speedY;
                this.speedY -= this.acceleration
            }
        }, 1000 / 30);
    }

    /**
     * check collision in all four frame corners (square)
     * 
     */
    isColliding(object) {
        return this.x + this.width > object.x &&
            this.y + this.height > object.y &&
            this.x < object.x &&
            this.y < object.y + object.height
    }

    /**
     * check is object is falling
     * 
     */
    isAboveGround() {
        if (this instanceof ThrowableOject) {
            return true;
        } else {
            return this.y < 230;
        }
    }

    /**
     * calls each image in array
     * 
     */
    playAnimation(images) {
        let i = this.currentImage % images.length; /* e.g. i = 0 % 6; --> 0, Rest 0  ==>  1 % 6; --> 0, Rest 1
            i = 0, 1, 2, 3, 4, 5, 0, 1, 2, 3, 4, 5, 0, 1, 2, 3, 4, 5, 0, 1, 2, 3, 4, 5,... */
        let path = images[i];
        this.img = this.imageCache[path]; 
        this.currentImage++;
    };

    /**
     * object moves to the right according to speed set
     * 
     */
    moveRight() {
        this.x += this.speed;
    }

    /**
     * object moves to the left according to speed set
     * 
     */
    moveLeft() {
        this.x -= this.speed;
    }

    /**
     * object jumps changing y-axis
     * 
     */
    jump() {
        this.speedY = 20;
    }

    /**
     * deduct energy when object collision
     * 
     */
    hit() {
        this.energy -= 5;
        if (this.energy < 0) {
            this.energy = 0;
        } else {
            this.lastHit = new Date().getTime();
        }
    }

    /**
     * object is hurt after hit/collision
     * 
     */
    isHurt() {
        let timepassed = new Date().getTime() - this.lastHit; /* Difference in ms */
        timepassed = timepassed / 1000; /* Difference in s */
        return timepassed < 1;
    }

    /**
     * object dead when it has no energy left
     * 
     */
    isDead() {
        return this.energy == 0;
    }

}