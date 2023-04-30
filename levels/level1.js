/**
 * defines level1 for new @instance of "Level" used in @function "initLevel()"
 */
let level1;

/**
 * initialize level 1 
 * @param {array} chickens array filled with all chickens
 * @param {array} babyChickens array filled with all babyChicken
 * @param {array} endboss array filled with endboss
 * @param {array} clouds array filled with all clouds
 * @param {array} backgroundObjects array filled with all backgroundObjects
 * @param {array} bottles array filled with all bottles
 * @param {array} coins array filled with all coins
 */

/**
 * creates objects (enemies, background and others)
 */
function initLevel() {

    level1 = new Level(
        [
            new Chicken(),
            new Chicken(),
            new Chicken(),
            new Chicken(),
            new Chicken(),
            new Chicken()
        ],
        [
            new BabyChicken(),
            new BabyChicken(),
            new BabyChicken(),
            new BabyChicken()
        ],
        [
            new Endboss(),
        ],
        [
            new Cloud(),
            new Cloud(),
            new Cloud(),
            new Cloud(),
            new Cloud(),
            new Cloud(),
        ],
        [
            new BackgroundObject('img/5.Fondo/Capas/5.cielo_1920-1080px.png', -719),
            new BackgroundObject('img/5.Fondo/Capas/3.Fondo3/2.png', -719),
            new BackgroundObject('img/5.Fondo/Capas/2.Fondo2/2.png', -719),
            new BackgroundObject('img/5.Fondo/Capas/1.suelo-fondo1/2.png', -719),

            new BackgroundObject('img/5.Fondo/Capas/5.cielo_1920-1080px.png', 0),
            new BackgroundObject('img/5.Fondo/Capas/3.Fondo3/1.png', 0),
            new BackgroundObject('img/5.Fondo/Capas/2.Fondo2/1.png', 0),
            new BackgroundObject('img/5.Fondo/Capas/1.suelo-fondo1/1.png', 0),

            new BackgroundObject('img/5.Fondo/Capas/5.cielo_1920-1080px.png', 719),
            new BackgroundObject('img/5.Fondo/Capas/3.Fondo3/2.png', 719),
            new BackgroundObject('img/5.Fondo/Capas/2.Fondo2/2.png', 719),
            new BackgroundObject('img/5.Fondo/Capas/1.suelo-fondo1/2.png', 719),

            new BackgroundObject('img/5.Fondo/Capas/5.cielo_1920-1080px.png', 719 * 2),
            new BackgroundObject('img/5.Fondo/Capas/3.Fondo3/1.png', 719 * 2),
            new BackgroundObject('img/5.Fondo/Capas/2.Fondo2/1.png', 719 * 2),
            new BackgroundObject('img/5.Fondo/Capas/1.suelo-fondo1/1.png', 719 * 2),

            new BackgroundObject('img/5.Fondo/Capas/5.cielo_1920-1080px.png', 719 * 3),
            new BackgroundObject('img/5.Fondo/Capas/3.Fondo3/2.png', 719 * 3),
            new BackgroundObject('img/5.Fondo/Capas/2.Fondo2/2.png', 719 * 3),
            new BackgroundObject('img/5.Fondo/Capas/1.suelo-fondo1/2.png', 719 * 3),

            new BackgroundObject('img/5.Fondo/Capas/5.cielo_1920-1080px.png', 719 * 4),
            new BackgroundObject('img/5.Fondo/Capas/3.Fondo3/1.png', 719 * 4),
            new BackgroundObject('img/5.Fondo/Capas/2.Fondo2/1.png', 719 * 4),
            new BackgroundObject('img/5.Fondo/Capas/1.suelo-fondo1/1.png', 719 * 4),

            new BackgroundObject('img/5.Fondo/Capas/5.cielo_1920-1080px.png', 719 * 5),
            new BackgroundObject('img/5.Fondo/Capas/3.Fondo3/2.png', 719 * 5),
            new BackgroundObject('img/5.Fondo/Capas/2.Fondo2/2.png', 719 * 5),
            new BackgroundObject('img/5.Fondo/Capas/1.suelo-fondo1/2.png', 719 * 5),
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