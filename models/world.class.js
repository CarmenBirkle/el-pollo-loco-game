/**
 * @class World - creates the world with all objects and enemies
 * @param {Object} character - character object - contains all information about the character
 * @param {Object} level - level object - contains all objects of a level
 * @param {Object} canvas - canvas object - for drawing
 * @param {Object} ctx - canvas context object - for drawing
 * @param {Object} keyboard - keyboard object - for pressed buttons
 * @param {Integer} camera_x - camera position in x direction
 * @param {Object} healthBar - health bar object - for character life-status
 * @param {Object} bottleBar - bottle bar object - for collected bottles status
 * @param {Object} coinBar - coin bar object - for collected coins status
 * @param {Object} endbossBar - endboss bar object - for endboss life-status
 * @param {Object} bottle - bottle object
 * @param {Object} coin - coin object
 * @param {Array} throwableObjects - array of collected bottles to push collected bottles
 */
class World {
  character = new Character();
  level = level1;
  canvas;
  otherDirection = false;
  ctx;
  keyboard;
  camera_x = 0;
  healthBar = new HealthBar();
  bottleBar = new BottleBar();
  coinBar = new CoinBar();
  endbossBar = new EndbossBar();
  bottle = new Bottle();
  coin = new Coin();
  throwableObjects = [];
  endboss = this.level.endboss[0];
  throwBottleAfterDelay = true;

  coinSound = new Audio('audio/coin.mp3');
  bottleSound = new Audio('audio/bottle.mp3');
  chickenSound = new Audio('audio/chicken-dead.mp3');
  hurtSound = new Audio('audio/hurt.mp3');
  throwSound = new Audio('audio/throw.mp3');

  constructor(canvas, keyboard) {
    this.volumeOfSounds();
    this.ctx = canvas.getContext('2d');
    this.canvas = canvas;
    this.keyboard = keyboard;
    this.draw();
    this.setWorld();
    this.runAllIntervals();
  }

  setWorld() {
    this.character.world = this;
  }

  /**
   * sound volume of all sounds
   */
  volumeOfSounds() {
    this.bottleSound.volume = 0.5;
    this.chickenSound.volume = 0.1;
    this.coinSound.volume = 0.1;
    this.hurtSound.volume = 0.1;
  }

  muteSounds() {
    this.bottleSound.volume = 0.0;
    this.chickenSound.volume = 0.0;
    this.coinSound.volume = 0.0;
    this.hurtSound.volume = 0.0;
  }

  /**
   * in the interval of 100 ms the functions to check for collisions are called
   * it contains the functions to check for collisions between character, enemies and other objects
   * interval is set to 100 milliseconds
   */
  runAllIntervals() {
    setRunningIntervals(() => {
      this.checkAllCollisions();
      this.checkThrowObject();
      this.collisionCharacterAboveEnemies(this.level.chickens);
      this.collisionCharacterAboveEnemies(this.level.babyChickens);
    }, 100);
    setRunningIntervals(() => {
      this.deleteAllChickens();
    }, 2000);
  }

  checkAllCollisions() {
    this.checkCollisionsItem('coin', this.coinBar, this.coinSound);
    this.checkCollisionsItem('bottle', this.bottleBar, this.bottleSound);
    this.checkCollisionsChicken(this.level.chickens);
    this.checkCollisionsChicken(this.level.babyChickens);
    this.checkCollisionsHit();
    this.checkCollisionsEndbossHit();
    this.checkCollisionsEndboss();
  }

  //<------- Collision Functions with Items (coins and bottles) ------->
  /**
   * Checks for collisions with items based on the collection type and handles the collisions by updating the progress bar and performing the necessary actions.
   */
  checkCollisionsItem(collectionType, progressBar, sound) {
    let collectionArray = this.handleCollectionType(collectionType);
    collectionArray.forEach((item, index) => {
      if (
        this.bottlePercentUnder100(collectionType, progressBar, item) ||
        this.colletOtherItems(collectionType, progressBar, item)
      ) {
        this.handleItemCollision(progressBar, collectionArray, index, sound);
      }
    });
  }
  /**
   * Handles the collision of an item by increasing the progress bar percentage, updating the progress bar display, removing the item from the collection array, and playing a sound.
   */
  handleItemCollision(progressBar, collectionArray, index, sound) {
    this.increasePercentage(progressBar);
    progressBar.setPercentage(progressBar.percentage);
    collectionArray.splice(index, 1);
    sound.play();
  }

  /**
   *  * Checks if the collection type is 'bottle', the progress bar percentage is less than 100, and there is a collision between the character and the item.
   */
  bottlePercentUnder100(collectionType, progressBar, item) {
    return (
      collectionType === 'bottle' &&
      progressBar.percentage < 100 &&
      this.character.isColliding(item)
    );
  }

  /**
   *  * Checks if the item belongs to a collection type other than 'bottle' and if the character is colliding with it.
   */
  colletOtherItems(collectionType, progressBar, item) {
    return collectionType !== 'bottle' && this.character.isColliding(item);
  }

  /**
   * Handles the collection type and returns the corresponding collection array.
   * @param {string} collectionType - The type of collection ('coin' or 'bottle').
   * @returns {Array} The collection array based on the collection type.
   */
  handleCollectionType(collectionType) {
    let collectionArray;
    if (collectionType === 'coin') {
      collectionArray = this.level.coins;
    } else if (collectionType === 'bottle') {
      collectionArray = this.level.bottles;
    }
    return collectionArray;
  }

  //<------- Delete Dead Enemies Functions  ------->

  deleteAllChickens() {
    this.deleteDeadEntities(this.level.babyChickens);
    this.deleteDeadEntities(this.level.chickens);
  }

  /**
   * Deletes the dead entities from the given array of entities.
   * @param {Array} entities - The array of entities to check and delete dead entities from.
   */

  deleteDeadEntities(entities) {
    const deadEntityIndexes = [];
    entities.forEach((entity, index) => {
      if (entity.chickenDead) {
        deadEntityIndexes.push(index);
      }
    });
    for (let i = deadEntityIndexes.length - 1; i >= 0; i--) {
      entities.splice(deadEntityIndexes[i], 1);
    }
  }
  //<------- Collision Enemies Functions with percentage and health logic ------->
  /**
   * Increases the percentage value of the given object type by 20. If the resulting percentage exceeds 100,
   * it is capped at 100.
   * @param {Object} objectType - The object type whose percentage value should be increased.
   */
  increasePercentage(objectType) {
    objectType.percentage += 20;
    if (objectType.percentage > 100) {
      objectType.percentage = 100;
    }
  }

  throwBottleTimeout() {
    this.throwBottleAfterDelay = false;
    setTimeout(() => {
      this.throwBottleAfterDelay = true; // Reset the flag after the delay
    }, 250);
  }

  /**
   * Iterates over all the chickens in this level, checks if the character is colliding with a chicken, and damages the character if so.
   * If the chicken is already dead or the character is above the ground, no damage is dealt.
   * Updates the character's energy level and plays a hurt sound effect.
   */
  checkCollisionsChicken(enemietype) {
    enemietype.forEach((enemy) => {
      if (
        this.character.isColliding(enemy) &&
        !enemy.chickenDead &&
        !this.character.isAboveGround()
      ) {
        this.character.hit(5);
        this.healthBar.setPercentage(this.character.energy);
        this.hurtSound.play();
      }
    });
  }

  /**
   * Iterates over all the chickens and baby chickens in this level and all throwable objects, checks if a throwable object collides with this enemy.
   * Plays a chicken sound effect when a chicken is hit by a throwable object and sets the 'chickenDead' flag to true.
   */
  checkCollisionsHit() {
    const entities = this.level.chickens.concat(this.level.babyChickens);

    entities.forEach((entity, index) => {
      this.throwableObjects.forEach((throwObject) => {
        if (throwObject.isColliding(entity) && !entity.chickenDead) {
          this.chickenSound.play();
          entity.chickenDead = true;
        }
      });
    });
  }

  /**
   * Iterates over all the throwable objects in this level, checks if a throwable object collides with the endboss, and damages the endboss if so.
   * Updates the endboss energy level and the endboss bar display.
   */
  checkCollisionsEndbossHit() {
    this.throwableObjects.forEach((throwBottle) => {
      if (throwBottle.isColliding(this.endboss)) {
        this.endboss.hit(20);
        throwBottle.bottleHit = true;
        this.endbossBar.setPercentage(this.endboss.energy);
      }
    });
  }

  /**
   * Checks if the character is colliding with the endboss and damages the character if so.
   * Updates the character's energy level and plays a hurt sound effect.
   */
  checkCollisionsEndboss() {
    if (this.character.isColliding(this.endboss)) {
      this.character.hit(5);
      this.healthBar.setPercentage(this.character.energy);
      this.hurtSound.play();
    }
  }

  /**
   * Checks if the 'D' key is pressed and if the character has any bottles left.
   * If so, creates a new throwable object at the character's position and adds it to the list of throwable objects.
   * Decrements the amount of bottles in the bottle bar and updates the bottle bar display.
   */
  checkThrowObject() {
    if (this.keyboard.D && this.bottleBar.percentage > 0 && this.throwBottleAfterDelay) {
      let bottle = new ThrowableOject(
        this.character.x + 20,
        this.character.y + 100,
        this.character.otherDirection
      );
      this.throwableObjects.push(bottle);
      this.bottleBar.percentage -= 20;
      this.bottleBar.setPercentage(this.bottleBar.percentage);
      this.throwBottleTimeout();
    }
  }

  /**
   *Checks if the character is colliding with  enemies while jumping above it.
   * If so, makes the character perform a jump and sets the 'chickenDead' flag to true.
   * Also plays a sound effect.
   */
  collisionCharacterAboveEnemies(enemies) {
    enemies.forEach((enemy) => {
      if (
        this.character.isColliding(enemy) &&
        this.character.isFalling() &&
        !enemy.chickenDead
      ) {
        this.character.jump();
        this.chickenSound.play();
        enemy.chickenDead = true;
      }
    });
  }
  //<------- Draw functions for canvas with flip logic  ------->
  /**
   * creates drawings; move entire world (translate, x-axis) and back after drawing to avoid continuous shifting; Camera and Character move in opposite directions
   *
   */
  draw() {
    this.ctx.clearRect(0, 0, this.canvas.width, this.canvas.height);
    this.ctx.translate(this.camera_x, 0);
    this.AddObjectsToMap(this.level.backgroundObjects);
    this.AddToMap(this.character);
    this.AddObjectsToMap(this.level.clouds);
    this.ctx.translate(-this.camera_x, 0);
    this.AddToMap(this.healthBar);
    this.AddToMap(this.bottleBar);
    this.AddToMap(this.coinBar);
    if (this.character.x > 1900) {
      this.AddToMap(this.endbossBar);
    }
    this.ctx.translate(this.camera_x, 0);
    this.AddObjectsToMap(this.level.bottles);
    this.AddObjectsToMap(this.level.coins);
    this.AddObjectsToMap(this.level.chickens);
    this.AddObjectsToMap(this.level.babyChickens);
    this.AddObjectsToMap(this.level.endboss);
    this.AddObjectsToMap(this.throwableObjects);
    this.ctx.translate(-this.camera_x, 0);
    let self = this;
    if (!this.paused) {
      requestAnimationFrame(function () {
        self.draw();
      });
    }
  }

  /**
   * Adds an array of objects to the game map.
   * @param {Array} objects - The array of objects to be added to the map.
   */
  AddObjectsToMap(objects) {
    objects.forEach((objects) => {
      this.AddToMap(objects);
    });
  }

  /**
   * Adds an object to the map and performs additional operations, such as flipping the image if necessary,
   * drawing the object on the canvas, and flipping the image back if applicable.
   * @param {Object} object - The object to be added to the map.
   */
  AddToMap(object) {
    if (object.otherDirection) {
      this.flipImage(object);
    }
    object.draw(this.ctx);
    object.drawFrame(this.ctx);
    if (object.otherDirection) {
      this.flipImageBack(object);
    }
  }

  /**
   * Flips the image of the object horizontally.
   * If the object's 'otherDirection' property is true, flips the image
   * If 'otherDirection' is true, flips the image back to its original
   */
  flipImage(object) {
    this.ctx.save();
    this.ctx.translate(object.width, 0);
    this.ctx.scale(-1, 1);
    object.x = object.x * -1;
  }

  /**
   * flip the the image back horizontally for the character by negating its x-coordinate and restoring the
   * context's properties that were previously saved.
   */
  flipImageBack(object) {
    object.x = object.x * -1;
    this.ctx.restore();
  }
}
