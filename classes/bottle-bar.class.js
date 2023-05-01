/**
 * @class BottleBar - class for bottle bar to display the statusbar of bottles collected
 */
class BottleBar extends DrawableObject {
  amountOfBottles = 0;
  BOTTLE = [
    'img/7_statusbars/1_statusbar/3_statusbar_bottle/orange/0.png',
    'img/7_statusbars/1_statusbar/3_statusbar_bottle/orange/20.png',
    'img/7_statusbars/1_statusbar/3_statusbar_bottle/orange/40.png',
    'img/7_statusbars/1_statusbar/3_statusbar_bottle/orange/60.png',
    'img/7_statusbars/1_statusbar/3_statusbar_bottle/orange/80.png',
    'img/7_statusbars/1_statusbar/3_statusbar_bottle/orange/100.png',
  ];

  constructor() {
    super();
    this.loadImages(this.BOTTLE);
    this.x = 40;
    this.y = 40;
    this.width = 180;
    this.height = 50;
    this.updateBottleBar();
  }

  /**
   * Updates bottle bar image based on current index by fetching from
   * cache and collecting bottles
   */
  updateBottleBar() {
    let path = this.BOTTLE[this.resolveImageIndex()];
    this.img = this.imageCache[path];
  }

  /**
   * function to get the specified picture in dependence
   * of count number of bottles collected
   */
  resolveImageIndex() {
    if (this.amountOfBottles == 0) {
      return 0;
    } else if (this.amountOfBottles == 1) {
      return 1;
    } else if (this.amountOfBottles == 2) {
      return 2;
    } else if (this.amountOfBottles == 3) {
      return 3;
    } else if (this.amountOfBottles == 4) {
      return 4;
    } else if (this.amountOfBottles == 5) {
      return 5;
    }
  }
}
