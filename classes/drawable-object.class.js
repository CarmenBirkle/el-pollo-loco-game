/**
 *  @class Drawable Object - draw the image on canvas, the image is loaded from the path given in the parameter
 * the image is drawn on the position x,y with the size width, height
 * this is a father-class and the draw function  can be used for all images
 * @param {string} path
 * */
class DrawableObject {
  img;
  imageCache = {};
  currentImage = 0;
  x = 100;
  y = 170;
  height = 260;
  width = 100;

  offset = {
    top: 0,
    right: 0,
    bottom: 0,
    left: 0,
  };

  /**
   * create first image and load source according to the path
   * @param {string} path
   */
  loadImage(path) {
    this.img = new Image();
    this.img.src = path;
  }

  /**
   * draw image on canvas with the given parameters
   */
  draw(ctx) {
    ctx.drawImage(this.img, this.x, this.y, this.width, this.height);
  }

  /**
   * load images from array and push them into Json
   */
  loadImages(array) {
    array.forEach((path) => {
      let img = new Image();
      img.src = path;
      this.imageCache[path] = img; /* image push into Json */
    });
  }

  /**
   *  draw the frame around the object
   *  with transparent it is not visible, for testing purpose use blue
   */
  drawFrame(ctx) {
    if (this.selectedMovableObjects()) {
      ctx.beginPath();
      ctx.lineWidth = '4';
      ctx.strokeStyle = 'transparent'; // blue

      ctx.strokeRect(
        this.x + this.offset.left,
        this.y + this.offset.top,
        this.width - this.offset.left - this.offset.right,
        this.height - this.offset.top - this.offset.bottom
      );
    }
  }

  selectedMovableObjects() {
    return (
      this instanceof Character ||
      this instanceof Chicken ||
      this instanceof BabyChicken ||
      this instanceof Bottle ||
      this instanceof Coin ||
      this instanceof Endboss
    );
  }
}
