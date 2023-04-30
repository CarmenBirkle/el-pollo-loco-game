class Bottle extends DrawableObject {

    height = 80;
    width = 60;

    IMAGE_BOTTLE = [
        'img/6.botella/2.Botella_enterrada2.png',
    ];

    constructor() {
        super().loadImage(this.IMAGE_BOTTLE); 
        this.x = 200 + Math.random() * 3000;
        this.y = 360;

    }
}