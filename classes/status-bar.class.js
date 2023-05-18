/**
 * @class StatusBar represent als functions for all Statusbars and displays it
 * @extends DrawableObject
 * bottle-bar.class.js, health-bar.class.js, endboss-health-bar.class.js, coin-bar.class.js
 * inherits from this class
 */
class StatusBar extends DrawableObject {
  height = 50;
  width = 180;
  percentage;

  /**
   * update the status bar image based on the percentage with health status
   * @param {integer} percentage - represent the health percentage
   */

  setPercentage(percentage) {
    this.percentage = percentage;
    let path = this.IMAGES[this.resolveImageIndex()];
    this.img = this.imageCache[path];
  }

  /**
   * @returns {integer} - the index of the image based on the percentage
   */
  resolveImageIndex() {
    if (this.percentage == 100) {
      return 5;
    } else if (this.percentage >= 80) {
      return 4;
    } else if (this.percentage >= 60) {
      return 3;
    } else if (this.percentage >= 40) {
      return 2;
    } else if (this.percentage >= 20) {
      return 1;
    } else {
      return 0;
    }
  }
}
