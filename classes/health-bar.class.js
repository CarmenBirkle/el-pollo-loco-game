/**
 * @class StatusBar represent the health status of the player and displays it
 */
class HealthBar extends StatusBar {
  // percentage = 100;
  x = 40;
  y = 0;
  IMAGES = [
    'img/7_statusbars/1_statusbar/2_statusbar_health/green/0.png',
    'img/7_statusbars/1_statusbar/2_statusbar_health/green/20.png',
    'img/7_statusbars/1_statusbar/2_statusbar_health/green/40.png',
    'img/7_statusbars/1_statusbar/2_statusbar_health/green/60.png',
    'img/7_statusbars/1_statusbar/2_statusbar_health/green/80.png',
    'img/7_statusbars/1_statusbar/2_statusbar_health/green/100.png',
  ];

  constructor() {
    super().loadImages(this.IMAGES);
    // this.x = 40;
    // this.y = 0;
    // this.width = 180;
    // this.height = 50;
    this.setPercentage(100);
  }

  /**
   * update the status bar image based on the percentage with health status
   * @param {integer} percentage - represent the health percentage
   */

  // setPercentage(percentage) {
  //   this.percentage = percentage;
  //   let path = this.IMAGES[this.resolveImageIndex()];
  //   this.img = this.imageCache[path];
  // }

  /**
   * @returns {integer} - the index of the image based on the percentage
   */
  //   resolveImageIndex() {
  //     if (this.percentage == 100) {
  //       return 5;
  //     } else if (this.percentage > 80) {
  //       return 4;
  //     } else if (this.percentage > 60) {
  //       return 3;
  //     } else if (this.percentage > 40) {
  //       return 2;
  //     } else if (this.percentage > 20) {
  //       return 1;
  //     } else {
  //       return 0;
  //     }
  //   }
}
