/**
 * @class EndbossBar - represents the endboss health bar
 */
class EndbossBar extends DrawableObject {
  energy = 25;
  ENDBOSS_BAR = [
    'img/7_statusbars/1_statusbar/2_statusbar_health/orange/0.png',
    'img/7_statusbars/1_statusbar/2_statusbar_health/orange/20.png',
    'img/7_statusbars/1_statusbar/2_statusbar_health/orange/40.png',
    'img/7_statusbars/1_statusbar/2_statusbar_health/orange/60.png',
    'img/7_statusbars/1_statusbar/2_statusbar_health/orange/80.png',
    'img/7_statusbars/1_statusbar/2_statusbar_health/orange/100.png',
  ];

  constructor() {
    super();
    this.loadImages(this.ENDBOSS_BAR);
    this.x = 250;
    this.y = 400;
    this.width = 250;
    this.height = 80;
    this.updateEndbossBar(25);
  }

  /**
   * Updates endboss-health-bar image based on current energy
   */
  updateEndbossBar(energy) {
    this.energy = energy;
    let path = this.ENDBOSS_BAR[this.resolveImageIndex()];
    this.img = this.imageCache[path];
  }

  /**
   * function to get the specified picture in dependence
   */
  resolveImageIndex() {
    if (this.energy == 0) {
      return 0;
    } else if (this.energy == 5) {
      return 1;
    } else if (this.energy == 10) {
      return 2;
    } else if (this.energy == 15) {
      return 3;
    } else if (this.energy == 20) {
      return 4;
    } else if (this.energy == 25) {
      return 5;
    }
  }
}
