/**
 * @class EndbossBar - represents the endboss health bar
 * @extends StatusBar
 */
class EndbossBar extends StatusBar {
  x = 250;
  y = 400;
  width = 250;
  height = 80;

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
    this.setPercentage(100);
  }
}
