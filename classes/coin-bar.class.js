/**
 * @class CoinBar
 * - represents the coin bar
 */
class CoinBar extends StatusBar {
  // percentage = 0;
  x = 40;
  y = 80;
  IMAGES = [
    'img/7_statusbars/1_statusbar/1_statusbar_coin/blue/0.png',
    'img/7_statusbars/1_statusbar/1_statusbar_coin/blue/20.png',
    'img/7_statusbars/1_statusbar/1_statusbar_coin/blue/40.png',
    'img/7_statusbars/1_statusbar/1_statusbar_coin/blue/60.png',
    'img/7_statusbars/1_statusbar/1_statusbar_coin/blue/80.png',
    'img/7_statusbars/1_statusbar/1_statusbar_coin/blue/100.png',
  ];

  constructor() {
    super().loadImages(this.IMAGES);

    // this.width = 180;
    // this.height = 50;
    this.setPercentage(0);
  }

  // collectCoins() {
  //   this.percentage += 20;
  //   if (this.percentage > 100) {
  //     this.percentage = 100;
  //   }
  // }

  // increasePercentage() {
  //   this.percentage += 20;
  //   if (this.percentage > 100) {
  //     this.percentage = 100;
  //   }
  // }

  /**
   * Updates coin bar image based on current index by fetching from
   * cache and collecting coins
   */
  // updateCoinBar() {
  //   let path = this.IMAGES[this.resolveImageIndex()];
  //   this.img = this.imageCache[path];
  // }

  /**
   * function to get the specified picture in dependence
   * of count number of coins collected
   */
  // resolveImageIndex() {
  //   if (this.amountOfCoin == 0) {
  //     return 0;
  //   } else if (this.amountOfCoin == 1) {
  //     return 1;
  //   } else if (this.amountOfCoin == 2) {
  //     return 2;
  //   } else if (this.amountOfCoin == 3) {
  //     return 3;
  //   } else if (this.amountOfCoin == 4) {
  //     return 4;
  //   } else if (this.amountOfCoin == 5) {
  //     return 5;
  //   }
  // }
}
