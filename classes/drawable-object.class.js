class DrawableObject {
    
    img;
    imageCache = {}; //JSON
    currentImage = 0;
    x = 100;
    y = 250;
    height = 200;
    width = 100;

    /**
     * create first image and load source according to the path
     * 
     */
    loadImage(path) {
        this.img = new Image(); /* this.img = document.getElementById('image') <img id="image" src="path"> */
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
        array.forEach(path => {
            let img = new Image(); 
            img.src = path; 
            this.imageCache[path] = img; /* image push into Json */
        });

    }

    /**
     * draw frame for chicken and character to define position of image on canvas; helps to check collisions
     * 
     */
    drawFrame(ctx) { 
        if (this.instanceofElement()) { 
            ctx.beginPath();
            ctx.lineWidth = '5';
            ctx.strokeStyle = 'transparent';
            ctx.rect(this.x, this.y, this.width, this.height);
            ctx.stroke();
        }
    }

    instanceofElement() {
        return this instanceof Character || this instanceof Chicken || this instanceof BabyChicken || this instanceof Bottle || this instanceof Coin || this instanceof Endboss
    }

}