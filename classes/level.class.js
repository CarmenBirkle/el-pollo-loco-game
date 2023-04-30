class Level {
    endboss;
    coins;
    bottles;
    chickens;
    babychickens;
    clouds;
    backgroundObjects;
    level_end_x = 3500; /* where game scenario ends */

    constructor(chickens, babyChickens, endboss, clouds, backgroundObjects, bottles, coins) {
        this.chickens = chickens;
        this.babyChickens = babyChickens;
        this.endboss = endboss;
        this.clouds = clouds;
        this.backgroundObjects = backgroundObjects;
        this.bottles = bottles;
        this.coins = coins;
    }
}