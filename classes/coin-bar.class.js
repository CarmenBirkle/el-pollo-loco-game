/**
 * @class CoinBar
 * - represents the coin bar
 */
class CoinBar extends DrawableObject {
  amountOfCoin = 0;
  COIN = [
    'img/7_statusbars/1_statusbar/1_statusbar_coin/blue/0.png',
    'img/7_statusbars/1_statusbar/1_statusbar_coin/blue/20.png',
    'img/7_statusbars/1_statusbar/1_statusbar_coin/blue/40.png',
    'img/7_statusbars/1_statusbar/1_statusbar_coin/blue/60.png',
    'img/7_statusbars/1_statusbar/1_statusbar_coin/blue/80.png',
    'img/7_statusbars/1_statusbar/1_statusbar_coin/blue/100.png',
  ];

  constructor() {
    super();
    this.loadImages(this.COIN);
    this.x = 40;
    this.y = 80;
    this.width = 180;
    this.height = 50;
    this.updateCoinBar();
  }

  collectCoins() {
    this.amountOfCoin += 1;
    if (this.amountOfCoin > 5) {
      this.amountOfCoin = 5;
    }
  }

  /**
   * Updates coin bar image based on current index by fetching from
   * cache and collecting coins
   */
  updateCoinBar() {
    let path = this.COIN[this.resolveImageIndex()];
    this.img = this.imageCache[path];
  }

  /**
   * function to get the specified picture in dependence
   * of count number of coins collected
   */
  resolveImageIndex() {
    if (this.amountOfCoin == 0) {
      return 0;
    } else if (this.amountOfCoin == 1) {
      return 1;
    } else if (this.amountOfCoin == 2) {
      return 2;
    } else if (this.amountOfCoin == 3) {
      return 3;
    } else if (this.amountOfCoin == 4) {
      return 4;
    } else if (this.amountOfCoin == 5) {
      return 5;
    }
  }
}
