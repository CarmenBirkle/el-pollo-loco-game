class Cloud extends MovableObject { 

    y = 40;
    height = 250;
    width = 500;

    constructor() {
        super().loadImage('img/5.Fondo/Capas/4.nubes/1.png');
        this.x = Math.random() * 600;
        this.animate();
    }

    /**
     * change clouds position
     * 
     */
    animate() {
        setInterval(() => {
            this.moveLeft();
        }, 1000 / 60); 
    }
}