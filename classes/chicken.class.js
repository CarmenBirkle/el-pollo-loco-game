class Chicken extends MovableObject {

    y = 350;
    height = 80;
    width = 50;
    chickenDead = false;

    IMAGES_WALKING = [
        'img/3.Secuencias_Enemy_basico/Version_Gallinita (estas salen por orden de la gallina gigantona)/1.Ga_paso_derecho.png',
        'img/3.Secuencias_Enemy_basico/Version_Gallinita (estas salen por orden de la gallina gigantona)/2-Ga_centro.png',
        'img/3.Secuencias_Enemy_basico/Version_Gallinita (estas salen por orden de la gallina gigantona)/3.Ga_paso izquierdo.png',
    ];

    IMAGES_DEAD =[
        'img/3.Secuencias_Enemy_basico/Version_Gallinita (estas salen por orden de la gallina gigantona)/4.G_muerte.png'
    ];
    

     constructor() {
        super().loadImage('img/3.Secuencias_Enemy_basico/Version_Gallinita (estas salen por orden de la gallina gigantona)/1.Ga_paso_derecho.png');
        this.loadImages(this.IMAGES_WALKING);
        this.x = 400 + Math.random() * 3000; /* Math.random() -> number between 0 and 1 */
        this.speed = 0.15 + Math.random() * 0.5; /* specify chickens speed; each chicken with different speed */
        this.animate();
    }

    /**
     * change chickens images and speed according to its actions or physical state
     * 
     */
    animate() {
        setInterval(() => {
            this.moveLeft();
        }, 1000 / 60); 

        setInterval(() => {
            if (this.chickenDead) {
                this.loadImage(this.IMAGES_DEAD);
                this.speed = 0;
            }
            else {
                this.playAnimation(this.IMAGES_WALKING);
            }
        }, 1000 / 10);
    }

}