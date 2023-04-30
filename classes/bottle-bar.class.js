class BottleBar extends DrawableObject{

    BOTTLE = [
        'img/7.Marcadores/Barra/Marcador_botella/Azul/1.png',
        'img/7.Marcadores/Barra/Marcador_botella/Azul/2.png',
        'img/7.Marcadores/Barra/Marcador_botella/Azul/3.png',
        'img/7.Marcadores/Barra/Marcador_botella/Azul/4.png',
        'img/7.Marcadores/Barra/Marcador_botella/Azul/5.png',
        'img/7.Marcadores/Barra/Marcador_botella/Azul/6.png'
    ];

    amountOfBottles = 0;

    constructor() {
        super();
        this.loadImages(this.BOTTLE);
        this.x = 40;
        this.y = 40;
        this.width = 180;
        this.height = 50; 
        this.updateBottleBar();
    }

    /**
     * show bar image according to number of bottles collected
     * 
     */
    updateBottleBar() {
        let path = this.BOTTLE[this.resolveImageIndex()];
        this.img = this.imageCache[path];
    }

    /**
     * count number of bottles collected
     * 
     */
    resolveImageIndex() {
        if (this.amountOfBottles == 0) {
            return 0;
        } else if (this.amountOfBottles == 1) {
            return 1;
        } else if (this.amountOfBottles == 2) {
            return 2;
        } else if (this.amountOfBottles == 3) {
            return 3;
        } else if (this.amountOfBottles == 4) {
            return 4;
        } else if (this.amountOfBottles == 5) {
            return 5;
        } 
    }
}