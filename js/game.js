let canvas;
let world;
let keyboard = new Keyboard();
let audioOn = false;

gameAudio = new Audio('audio/music.mp3')

/**
 * defines variable canvas and creates new instance of World with parameters canvas and keyboard
 * 
 */
function init() {
    canvas = document.getElementById('canvas'); // returns an Element object representing the element whose id property matches the specified string
    world = new World(canvas, keyboard);
    mobileKeyboard();
}

/**
 * restarts the game by refreshing the current documents 
 * 
 */
function restart() {
    location.reload();
}

/**
 * shows screen when user wins 
 * 
 */
function win() {
    document.getElementById('game').classList.add('d-none');
    document.getElementById('win').classList.remove('d-none');
    gameAudio.pause();
}

/**
 * shows screen when user lost
 * 
 */
function gameOver() {
    document.getElementById('game').classList.add('d-none');
    document.getElementById('gameOver').classList.remove('d-none');
    document.getElementById('win').classList.add('d-none');
    gameAudio.pause();
}

/**
 * starts the game
 * 
 */
function startGame() {
    initLevel(); //creates objects (enemies, background and others)
    init();      // creates world with canvas
    playMusic();
    document.getElementById('start').classList.add('d-none');
    document.getElementById('game').classList.remove('d-none');
    document.getElementById('win').classList.add('d-none');
}

/**
 * sets or returns whether the music should start playing over again when it is finished; defines music volume and removes mute buttons opacity
 * 
 */
function playMusic() {
    gameAudio.loop = true;
    gameAudio.play();
    gameAudio.volume = 0.1;
    audioOn = true;
    document.getElementById('mute').classList.remove('opacity')
}

/**
 * stops music when it is on or plays music when off
 * 
 */
function stopMusic() {
    if (audioOn) {
        gameAudio.pause();
        document.getElementById('mute').classList.add('opacity');
        audioOn = false;
    } else {
        playMusic();
    }

}

/**
 * makes canvas element go full screen
 * 
 */
function fullscreen() {
    canvas.requestFullscreen();
}

/**
 * Check if the user presses a botton on the keyboard and update Keyboard object:
 */
 window.addEventListener('keydown', (e) => {
  switch (e.key) {
      case "ArrowLeft":
          keyboard.LEFT = true;
          break;
      case "ArrowRight":
          keyboard.RIGHT = true;
          break;
      case "ArrowUp":
          keyboard.UP = true;
          break;
      case "d":
          keyboard.D = true;
          break;
      case " ":
          keyboard.SPACE = true;
          break;
  }
});

window.addEventListener('keyup', (e) => {
  switch (e.key) {
      case "ArrowLeft":
          keyboard.LEFT = false;
          break;
      case "ArrowRight":
          keyboard.RIGHT = false;
          break;
      case "ArrowUp":
          keyboard.UP = false;
          break;
      case "ArrowDown":
          keyboard.D = false;
          break;
      case " ":
          keyboard.SPACE = false;
          break;
      case "d":
          keyboard.D = false;
          break;
  }
});

/**
 * This function check the mobile control buttons
 */
 function mobileKeyboard() {
  upButton();
  throwButton();
  leftButton();
  rightButton();
}

/**
* the up-button is pressed or released 
*/
function upButton() {
  document.getElementById('up-btn').addEventListener('touchstart', (e) => {
      e.preventDefault();
      keyboard.SPACE = true;
  });
  document.getElementById('up-btn').addEventListener('touchend', (e) => {
      e.preventDefault();
      keyboard.SPACE = false;
  });
}

/**
*the throw-button is pressed or released 
*/
function throwButton() {
  document.getElementById('throw-btn').addEventListener('touchstart', (e) => {
      e.preventDefault();
      keyboard.D = true;
  });
  document.getElementById('throw-btn').addEventListener('touchend', (e) => {
      e.preventDefault();
      keyboard.D = false;
  });
}

/**
* the left-button is pressed or released
*/
function leftButton() {
  document.getElementById('left-btn').addEventListener('touchstart', (e) => {
      e.preventDefault();
      keyboard.LEFT = true;
  });
  document.getElementById('left-btn').addEventListener('touchend', (e) => {
      e.preventDefault();
      keyboard.LEFT = false;
  });
}

/**
* the right-button is pressed or released
*/
function rightButton() {
  document.getElementById('right-btn').addEventListener('touchstart', (e) => {
      e.preventDefault();
      keyboard.RIGHT = true;
  });
  document.getElementById('right-btn').addEventListener('touchend', (e) => {
      e.preventDefault();
      keyboard.RIGHT = false;
  });
}
