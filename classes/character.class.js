class Character extends MovableObject {

    y = 230;
    IMAGES_WALKING = [
        'img/2.Secuencias_Personaje-Pepe-correccion/2.Secuencia_caminata/W-21.png',
        'img/2.Secuencias_Personaje-Pepe-correccion/2.Secuencia_caminata/W-22.png',
        'img/2.Secuencias_Personaje-Pepe-correccion/2.Secuencia_caminata/W-23.png',
        'img/2.Secuencias_Personaje-Pepe-correccion/2.Secuencia_caminata/W-24.png',
        'img/2.Secuencias_Personaje-Pepe-correccion/2.Secuencia_caminata/W-25.png',
        'img/2.Secuencias_Personaje-Pepe-correccion/2.Secuencia_caminata/W-26.png'
    ];

    IMAGES_JUMPING = [
        'img/2.Secuencias_Personaje-Pepe-correccion/3.Secuencia_salto/J-31.png',
        'img/2.Secuencias_Personaje-Pepe-correccion/3.Secuencia_salto/J-32.png',
        'img/2.Secuencias_Personaje-Pepe-correccion/3.Secuencia_salto/J-33.png',
        'img/2.Secuencias_Personaje-Pepe-correccion/3.Secuencia_salto/J-34.png',
        'img/2.Secuencias_Personaje-Pepe-correccion/3.Secuencia_salto/J-35.png',
        'img/2.Secuencias_Personaje-Pepe-correccion/3.Secuencia_salto/J-36.png',
        'img/2.Secuencias_Personaje-Pepe-correccion/3.Secuencia_salto/J-37.png',
        'img/2.Secuencias_Personaje-Pepe-correccion/3.Secuencia_salto/J-38.png',
        'img/2.Secuencias_Personaje-Pepe-correccion/3.Secuencia_salto/J-39.png'
    ];

    IMAGES_DEAD = [
        'img/2.Secuencias_Personaje-Pepe-correccion/5.Muerte/D-51.png',
        'img/2.Secuencias_Personaje-Pepe-correccion/5.Muerte/D-52.png',
        'img/2.Secuencias_Personaje-Pepe-correccion/5.Muerte/D-53.png',
        'img/2.Secuencias_Personaje-Pepe-correccion/5.Muerte/D-54.png',
        'img/2.Secuencias_Personaje-Pepe-correccion/5.Muerte/D-55.png',
        'img/2.Secuencias_Personaje-Pepe-correccion/5.Muerte/D-56.png',
        'img/2.Secuencias_Personaje-Pepe-correccion/5.Muerte/D-57.png'
    ];

    IMAGES_HURT = [
        'img/2.Secuencias_Personaje-Pepe-correccion/4.Herido/H-41.png',
        'img/2.Secuencias_Personaje-Pepe-correccion/4.Herido/H-42.png',
        'img/2.Secuencias_Personaje-Pepe-correccion/4.Herido/H-43.png'
    ];
    world;
    speed = 10;
    walkingSound = new Audio('audio/running.mp3');
    jumpSound = new Audio('audio/jump.mp3');

    constructor() {
        super().loadImage('img/2.Secuencias_Personaje-Pepe-correccion/2.Secuencia_caminata/W-21.png');
        this.loadImages(this.IMAGES_WALKING);
        this.loadImages(this.IMAGES_JUMPING);
        this.loadImages(this.IMAGES_DEAD);
        this.loadImages(this.IMAGES_HURT);
        this.volumeOfSoundsCaracter();
        this.applyGravity();
        this.animate();
        //this.energy = 100;
    }
    
    /**
     * adjust volume of sounds
     * 
     */
    volumeOfSoundsCaracter() {
        this.jumpSound.volume = 0.3;
    }

    /**
     * change character images, positions and sounds according to its actions or physical state
     * 
     */
    animate() {
        setInterval(() => {
            this.walkingSound.pause();
            if (this.world.keyboard.RIGHT && this.x < this.world.level.level_end_x) {
                this.moveRight();
                this.walkingSound.play();
                this.otherDirection = false;
            }

            if (this.world.keyboard.LEFT && this.x > 100) {
                this.moveLeft();
                this.walkingSound.play();
                this.otherDirection = true;
            }
            this.world.camera_x = -this.x + 100; /* every time character is updated, camera/scenario moves in opposite direction */
        
            if(this.world.keyboard.SPACE && !this.isAboveGround() ) {
                this.jump();
                this.jumpSound.play();
            }
        }, 1000 / 60);

        setInterval(() => { 
            if (this.isDead()) {
                this.playAnimation(this.IMAGES_DEAD);
                gameOver();
                this.y = 500;
            } else if(this.isHurt()) {
                this.playAnimation(this.IMAGES_HURT);
            } else if (this.isAboveGround()) {
                this.playAnimation(this.IMAGES_JUMPING);
            } else {
                if (this.world.keyboard.RIGHT || this.world.keyboard.LEFT) {
                    this.playAnimation(this.IMAGES_WALKING);
                }
            }
        }, 1000 / 10);
    }
}