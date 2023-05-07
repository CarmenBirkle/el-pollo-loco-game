/**
 * defines level1 with all enemies and background objects for new @instance of "Level" used in @function "initLevel()"
 */
let level1;

/**
 * Initialize level 1 with enemies and background objects
 * @param {array} chickens An array filled with all chickens
 * @param {array} babyChickens An array filled with all baby chickens
 * @param {array} endboss An array filled with the end boss
 * @param {array} clouds An array filled with all clouds
 * @param {array} backgroundObjects An array filled with all background objects
 * @param {array} bottles An array filled with all bottles
 * @param {array} coins An array filled with all coins
 */

/**
 * initializes game objects, such as enemies, background elements, and other elements.
 */
function initLevel() {
  level1 = new Level(
    [
      new Chicken(),
      new Chicken(),
      new Chicken(),
      new Chicken(),
      new Chicken(),
      new Chicken(),
    ],
    [
      new BabyChicken(),
      new BabyChicken(),
      new BabyChicken(),
      new BabyChicken(),
    ],
    [new Endboss()],
    [
      new Cloud(),
      new Cloud(),
      new Cloud(),
      new Cloud(),
      new Cloud(),
      new Cloud(),
    ],
    [
      new BackgroundObject('img/5_background/layers/air.png', -719),
      new BackgroundObject('img/5_background/layers/3_third_layer/2.png', -719),
      new BackgroundObject(
        'img/5_background/layers/2_second_layer/2.png',
        -719
      ),
      new BackgroundObject('img/5_background/layers/1_first_layer/2.png', -719),

      new BackgroundObject('img/5_background/layers/air.png', 0),
      new BackgroundObject('img/5_background/layers/3_third_layer/1.png', 0),
      new BackgroundObject('img/5_background/layers/2_second_layer/1.png', 0),
      new BackgroundObject('img/5_background/layers/1_first_layer/1.png', 0),

      new BackgroundObject('img/5_background/layers/air.png', 719),
      new BackgroundObject('img/5_background/layers/3_third_layer/2.png', 719),
      new BackgroundObject('img/5_background/layers/2_second_layer/2.png', 719),
      new BackgroundObject('img/5_background/layers/1_first_layer/2.png', 719),

      new BackgroundObject('img/5_background/layers/air.png', 719 * 2),
      new BackgroundObject(
        'img/5_background/layers/3_third_layer/1.png',
        719 * 2
      ),
      new BackgroundObject(
        'img/5_background/layers/2_second_layer/1.png',
        719 * 2
      ),
      new BackgroundObject(
        'img/5_background/layers/1_first_layer/1.png',
        719 * 2
      ),

      new BackgroundObject('img/5_background/layers/air.png', 719 * 3),
      new BackgroundObject(
        'img/5_background/layers/3_third_layer/2.png',
        719 * 3
      ),
      new BackgroundObject(
        'img/5_background/layers/2_second_layer/2.png',
        719 * 3
      ),
      new BackgroundObject(
        'img/5_background/layers/1_first_layer/2.png',
        719 * 3
      ),

      new BackgroundObject('img/5_background/layers/air.png', 719 * 4),
      new BackgroundObject(
        'img/5_background/layers/3_third_layer/1.png',
        719 * 4
      ),
      new BackgroundObject(
        'img/5_background/layers/2_second_layer/1.png',
        719 * 4
      ),
      new BackgroundObject(
        'img/5_background/layers/1_first_layer/1.png',
        719 * 4
      ),

      new BackgroundObject('img/5_background/layers/air.png', 719 * 5),
      new BackgroundObject(
        'img/5_background/layers/3_third_layer/2.png',
        719 * 5
      ),
      new BackgroundObject(
        'img/5_background/layers/2_second_layer/2.png',
        719 * 5
      ),
      new BackgroundObject(
        'img/5_background/layers/1_first_layer/2.png',
        719 * 5
      ),
    ],
    [
      new Bottle(),
      new Bottle(),
      new Bottle(),
      new Bottle(),
      new Bottle(),
      new Bottle(),
      new Bottle(),
      new Bottle(),
      new Bottle(),
      new Bottle(),
      new Bottle(),
    ],
    [
      new Coin(),
      new Coin(),
      new Coin(),
      new Coin(),
      new Coin(),
      new Coin(),
      new Coin(),
    ]
  );
}
