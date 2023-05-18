/**
 * @class BottleBar - class for bottle bar to display the statusbar of bottles collected
 * @extends StatusBar
 */
class BottleBar extends StatusBar {
  x = 40;
  y = 40;
  IMAGES = [
    'img/7_statusbars/1_statusbar/3_statusbar_bottle/orange/0.png',
    'img/7_statusbars/1_statusbar/3_statusbar_bottle/orange/20.png',
    'img/7_statusbars/1_statusbar/3_statusbar_bottle/orange/40.png',
    'img/7_statusbars/1_statusbar/3_statusbar_bottle/orange/60.png',
    'img/7_statusbars/1_statusbar/3_statusbar_bottle/orange/80.png',
    'img/7_statusbars/1_statusbar/3_statusbar_bottle/orange/100.png',
  ];

  constructor() {
    super().loadImages(this.IMAGES);
    this.setPercentage(0);
  }
}
