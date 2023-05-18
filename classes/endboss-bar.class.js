/**
 * @class EndbossBar - represents the endboss health bar
 */
class EndbossBar extends StatusBar {
  x = 250;
  y = 400;
  width = 250;
  height = 80;
  // energy = 100;
  IMAGES = [
    'img/7_statusbars/2_statusbar_endboss/statusbar_endboss/0.png',
    'img/7_statusbars/2_statusbar_endboss/statusbar_endboss/20.png',
    'img/7_statusbars/2_statusbar_endboss/statusbar_endboss/40.png',
    'img/7_statusbars/2_statusbar_endboss/statusbar_endboss/60.png',
    'img/7_statusbars/2_statusbar_endboss/statusbar_endboss/80.png',
    'img/7_statusbars/2_statusbar_endboss/statusbar_endboss/100.png',
  ];

  constructor() {
    super().loadImages(this.IMAGES);

    // this.width = 250;
    // this.height = 80;
    // this.updateEndbossBar(25);
    this.setPercentage(100);
  }

  /**
   * Updates endboss-health-bar image based on current energy
   */
  // updateEndbossBar(energy) {
  //   this.energy = energy;
  //   let path = this.ENDBOSS_BAR[this.resolveImageIndex()];
  //   this.img = this.imageCache[path];
  // }

  /**
   * function to get the specified picture in dependence
   */
  // resolveImageIndex() {
  //   if (this.energy == 0) {
  //     return 0;
  //   } else if (this.energy == 5) {
  //     return 1;
  //   } else if (this.energy == 10) {
  //     return 2;
  //   } else if (this.energy == 15) {
  //     return 3;
  //   } else if (this.energy == 20) {
  //     return 4;
  //   } else if (this.energy == 25) {
  //     return 5;
  //   }
  // }
}
