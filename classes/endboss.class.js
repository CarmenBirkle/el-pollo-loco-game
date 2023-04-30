class Endboss extends MovableObject {

    height = 400;
    width = 250;
    y = 50;
    x = 2500;
    world;
    energy = 25;
    endboss_dead = false;

    IMAGES_WALKING = [
        'img/4.Secuencias_Enemy_giganton-Dona_Gallinota-/2.Atecion-ataque/1.Alerta/G5.png',
        'img/4.Secuencias_Enemy_giganton-Dona_Gallinota-/2.Atecion-ataque/1.Alerta/G6.png',
        'img/4.Secuencias_Enemy_giganton-Dona_Gallinota-/2.Atecion-ataque/1.Alerta/G7.png',
        'img/4.Secuencias_Enemy_giganton-Dona_Gallinota-/2.Atecion-ataque/1.Alerta/G8.png',
        'img/4.Secuencias_Enemy_giganton-Dona_Gallinota-/2.Atecion-ataque/1.Alerta/G9.png',
        'img/4.Secuencias_Enemy_giganton-Dona_Gallinota-/2.Atecion-ataque/1.Alerta/G10.png',
        'img/4.Secuencias_Enemy_giganton-Dona_Gallinota-/2.Atecion-ataque/1.Alerta/G11.png',
        'img/4.Secuencias_Enemy_giganton-Dona_Gallinota-/2.Atecion-ataque/1.Alerta/G12.png',
    ];

    IMAGES_HURT = [
        'img/4.Secuencias_Enemy_giganton-Dona_Gallinota-/3.Herida/G21.png',
        'img/4.Secuencias_Enemy_giganton-Dona_Gallinota-/3.Herida/G22.png',
        'img/4.Secuencias_Enemy_giganton-Dona_Gallinota-/3.Herida/G23.png'
    ]

    IMAGES_DEAD = [
        'img/4.Secuencias_Enemy_giganton-Dona_Gallinota-/4.Muerte/G24.png',
        'img/4.Secuencias_Enemy_giganton-Dona_Gallinota-/4.Muerte/G25.png',
        'img/4.Secuencias_Enemy_giganton-Dona_Gallinota-/4.Muerte/G26.png'
    ]

    IMAGES_ANGRY = [
        'img/4.Secuencias_Enemy_giganton-Dona_Gallinota-/2.Atecion-ataque/2.Ataque/G13.png',
        'img/4.Secuencias_Enemy_giganton-Dona_Gallinota-/2.Atecion-ataque/2.Ataque/G14.png',
        'img/4.Secuencias_Enemy_giganton-Dona_Gallinota-/2.Atecion-ataque/2.Ataque/G15.png',
        'img/4.Secuencias_Enemy_giganton-Dona_Gallinota-/2.Atecion-ataque/2.Ataque/G16.png',
        'img/4.Secuencias_Enemy_giganton-Dona_Gallinota-/2.Atecion-ataque/2.Ataque/G17.png',
        'img/4.Secuencias_Enemy_giganton-Dona_Gallinota-/2.Atecion-ataque/2.Ataque/G18.png',
        'img/4.Secuencias_Enemy_giganton-Dona_Gallinota-/2.Atecion-ataque/2.Ataque/G19.png',
        'img/4.Secuencias_Enemy_giganton-Dona_Gallinota-/2.Atecion-ataque/2.Ataque/G20.png',

    ];

    constructor() {
        super().loadImage('img/7.Marcadores/Marcadorvida_enemy/Naranja.png');
        this.loadImages(this.IMAGES_WALKING);
        this.loadImages(this.IMAGES_HURT);
        this.loadImages(this.IMAGES_DEAD);
        this.loadImages(this.IMAGES_ANGRY);
        this.animate();
    }

    /**
     * change endboss images according to its actions or physical state
     * 
     */
    animate() {
        setInterval(() => {
            if (this.isHurt()) {
                this.playAnimation(this.IMAGES_HURT);
            } else
                if (this.isDead()) {
                    setTimeout(() => {
                        this.speed = 50;
                        this.moveRight();
                        this.playAnimation(this.IMAGES_DEAD);
                    }, 500);
                    setTimeout(() => {
                        win();
                    }, 1000);
                }
                else {
                    if (this.energy > 20) {
                        this.playAnimation(this.IMAGES_ANGRY);
                    } if (this.energy <=  20) {
                        this.speed = 5;
                        this.moveLeft();
                        this.playAnimation(this.IMAGES_WALKING);
                    }
                }
        }, 1000 / 5); 
    }
}