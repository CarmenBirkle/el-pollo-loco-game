class ThrowableOject extends MovableObject {

    THROW_BOTTLE = [
        'img/6.botella/Rotacion/1.png',
        'img/6.botella/Rotacion/2.png',
        'img/6.botella/Rotacion/3.png',
        'img/6.botella/Rotacion/4.png'
    ];

    
    constructor(x, y) {
        super().loadImage('img/6.botella/Rotacion/4.png');
        this.loadImages(this.THROW_BOTTLE);
        this.x = x;
        this.y = y;
        this.height = 70;
        this.width = 50;
        this.trow();
        this.animate()
    }

    trow() {
        this.speedY = 10;
        this.applyGravity();
        setInterval(() => {
            this.x += 20;
        }, 40);
    }

    animate() {
        setInterval(() => {
                this.playAnimation(this.THROW_BOTTLE);
        }, 100); 
    }
}