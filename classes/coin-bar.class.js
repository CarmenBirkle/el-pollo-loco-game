class CoinBar extends DrawableObject{

    COIN = [
        'img/7.Marcadores/Barra/Marcador moneda/Naranja/0_.png',
        'img/7.Marcadores/Barra/Marcador moneda/Naranja/20_ .png',
        'img/7.Marcadores/Barra/Marcador moneda/Naranja/40_.png',
        'img/7.Marcadores/Barra/Marcador moneda/Naranja/60_.png',
        'img/7.Marcadores/Barra/Marcador moneda/Naranja/80_ _1.png',
        'img/7.Marcadores/Barra/Marcador moneda/Naranja/100__1.png'
    ];

    amountOfCoin = 0;

    constructor() {
        super();
        this.loadImages(this.COIN);
        this.x = 40;
        this.y = 80;
        this.width = 180;
        this.height = 50; 
        this.updateCoinBar();
    }

    
    collectCoins() {
        this.amountOfCoin += 1;
        if (this.amountOfCoin > 5) {
            this.amountOfCoin = 5;
        }
    }

    /**
     * show bar image according to number of coins collected
     * 
     */
    updateCoinBar() {
        let path = this.COIN[this.resolveImageIndex()];
        this.img = this.imageCache[path];
    }

    /**
     * count number of coins collected
     * 
     */
    resolveImageIndex() {
        if (this.amountOfCoin == 0) {
            return 0;
        } else if (this.amountOfCoin == 1) {
            return 1;
        } else if (this.amountOfCoin == 2) {
            return 2;
        } else if (this.amountOfCoin == 3) {
            return 3;
        } else if (this.amountOfCoin == 4) {
            return 4;
        } else if (this.amountOfCoin == 5) {
            return 5;
        } 
    }


}