class DrawableObject {
  img;
  imageCache = {}; //JSON
  currentImage = 0;
  x = 100; // 120
  y = 170; //250; // 280
  height = 260; // 150
  width = 100; // 100

  offset = {
    top: 0,
    right: 0,
    bottom: 0,
    left: 0,
  };

  /**
   * create first image and load source according to the path
   *
   */
  loadImage(path) {
    this.img =
      new Image(); /* this.img = document.getElementById('image') <img id="image" src="path"> */
    this.img.src = path; /* .src = src"path"  */
  }

  /**
   * place/draw the image on canvas
   *
   */
  draw(ctx) {
    ctx.drawImage(this.img, this.x, this.y, this.width, this.height);
  }

  /**
   * FOR-Loop; runs the same code each time with a different image pushed in the Json
   *
   */
  loadImages(array) {
    array.forEach((path) => {
      let img = new Image();
      img.src = path;
      this.imageCache[path] = img; /* image push into Json */
    });
  }

  /**
   * draw frame for chicken and character to define position of image on canvas; helps to check collisions
   *
   */
  //   drawFrame(ctx) {
  //     if (this.instanceofElement()) {
  //       ctx.beginPath();
  //       ctx.lineWidth = '5';
  //       ctx.strokeStyle = 'transparent';
  //       ctx.rect(this.x, this.y, this.width, this.height);
  //       ctx.stroke();
  //     }
  //   }

  drawFrame(ctx) {
    if (this.selectedMovableObjects()) {
      ctx.beginPath();
      ctx.lineWidth = '4';
      ctx.strokeStyle = 'blue';
      //koordinaten wo die quadrate platziert werden sollen.

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

  //   instanceofElement() {
  //     return (
  //       this instanceof Character ||AQS
  //       this instanceof Chicken ||
  //       this instanceof BabyChicken ||
  //       this instanceof Bottle ||
  //       this instanceof Coin ||
  //       this instanceof Endboss
  //     );
  //   }
}
