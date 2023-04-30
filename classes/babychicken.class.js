class BabyChicken extends MovableObject {
  height = 50;
  width = 50;
  y = 380;
  babyChickenDead = false;

  IMAGES_WALKING = [
    'img/3.Secuencias_Enemy_basico/Version_pollito/1.Paso_derecho.png',
    'img/3.Secuencias_Enemy_basico/Version_pollito/2.Centro.png',
    'img/3.Secuencias_Enemy_basico/Version_pollito/3.Paso_izquierdo.png',
  ];

  IMAGES_DEAD = ['img/3.Secuencias_Enemy_basico/Version_pollito/4.Muerte.png'];

  constructor() {
    super().loadImage(
      'img/3.Secuencias_Enemy_basico/Version_pollito/1.Paso_derecho.png'
    );
    this.loadImages(this.IMAGES_WALKING);
    this.x = 500 + Math.random() * 2200;
    this.speed = 0.15 + Math.random() * 0.25;
    this.animate();
  }

  animate() {
    setInterval(() => {
      this.moveLeft();
    }, 1000 / 60);

    setInterval(() => {
      if (this.babyChickenDead) {
        this.loadImage(this.IMAGES_DEAD);
        this.speed = 0;
      } else {
        this.playAnimation(this.IMAGES_WALKING);
      }
    }, 1000 / 10);
  }
}
