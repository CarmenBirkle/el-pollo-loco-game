/**
 * @class Level - contains all objects of a level.
 *  @param {Integer} level_end_x  - contains the x position where the level ends in pixel
 */
class Level {
  endboss;
  coins;
  bottles;
  chickens;
  babyChickens;
  clouds;
  backgroundObjects;
  level_end_x = 3500;

  constructor(
    chickens,
    babyChickens,
    endboss,
    clouds,
    backgroundObjects,
    bottles,
    coins
  ) {
    this.chickens = chickens;
    this.babyChickens = babyChickens;
    this.endboss = endboss;
    this.clouds = clouds;
    this.backgroundObjects = backgroundObjects;
    this.bottles = bottles;
    this.coins = coins;
  }
}
