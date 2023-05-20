let canvas;
let world;
let keyboard = new Keyboard();
let audioOn = true;
let audioOnDuringGame = true;
let keyboardInfo = false;
let pause = false;
let autoPause = false;
let runningIntervals = [];
let restartButtonActive = false;

gameAudio = new Audio('audio/music.mp3');
gameLost = new Audio('audio/lost.mp3');
gameWon = new Audio('audio/victory.mp3');

/**
 * defines variable canvas and creates new instance of World with parameters canvas and keyboard
 * returns an Element object representing the element whose id property matches with id
 */
function init() {
  canvas = document.getElementById('canvas');
  world = new World(canvas, keyboard);
  mobileKeyboard();
}

/**
 * Adds a function to the active intervals that will be executed at regular intervals.
 *
 * @param {Function} fn - The function to be executed.
 * @param {number} time - The time interval in milliseconds after which the function should repeat.
 */

function setRunningIntervals(fn, time) {
  let interval = {
    fn: fn,
    time: time,
    id: setInterval(fn, time),
  };
  runningIntervals.push(interval);
}

/**
 * Clears all active intervals, pauses the game audio, hides the win and game over messages, and
 * removes the opacity from the pause button. Then starts the game again by calling the startGame function.
 * Display the countdown and start the game after the countdown
 */

function restart() {
  clearAllIntervals();
  gameAudio.pause();
  removeOpacity('pause');
  hideContainer('win');
  hideContainer('gameOver');
  if (restartButtonActive) {
    showContainer('countdown');
    startCountdown();
    restartButtonActive = false;
  } else {
    startGame();
  }
}

function startCountdown() {
  let countdownElement = document.getElementById('countdown');
  let count = 3;
  let countdownInterval = setInterval(updateCountdown, 500);

  function updateCountdown() {
    countdownElement.innerHTML = count;
    count--;

    if (count < 0) {
      clearInterval(countdownInterval);
      countdownElement.innerHTML = 'Go!';
      setTimeout(startGameAfterDelay, 500);
    }
  }
}

function startGameAfterDelay() {
  let countdownElement = document.getElementById('countdown');
  hideContainer('countdown');
  startGame();
  countdownElement.innerHTML = '';
}

/**
 * Adds the 'opacity' class to the 'pause' button to make it semi-transparent, pauses all active intervals
 * using the pauseIntervals function, and stops the game music using the stopMusic function.
 */
function pauseGame() {
  addOpacity('pause');
  pauseIntervals();
  stopMusic();
}

function checkRestartButtonActive() {
  restartButtonActive = true;
}

/**
 * Clears all active intervals by iterating through the `runningIntervals` array and calling the
 * `clearInterval` method for each interval's `id` property.
 */
function pauseIntervals() {
  runningIntervals.forEach((interval) => clearInterval(interval.id));
}

/**
 * Resumes the game by removing the 'opacity' class from the 'pause' element and calling
 * the `playIntervals` and `playMusic` functions to resume the intervals and audio.
 */
function continueGame() {
  removeOpacity('pause');
  playIntervals();
  audioOnDuringGame ? playMusic() : stopMusic();
}

/**
 * Resumes all paused intervals by iterating through the `runningIntervals` array and creating a new
 * interval for each object in the array.
 */
function playIntervals() {
  runningIntervals.forEach(
    (interval) => (interval.id = setInterval(interval.fn, interval.time))
  );
}

/**
 * Toggles the game between the paused and running states.
 */
function toggleGame() {
  if (pause) {
    continueGame();
    pause = false;
  } else {
    pauseGame();
    pause = true;
  }
}

/**
 * Displays the winning screen, stops all running intervals, and pauses the game audio.
 */
function win() {
  audioOnDuringGame ? gameWon.play() : gameWon.pause();
  setTimeout(() => {
    pauseGame();
    runningIntervals = [];
    clearAllIntervals();
    hideContainer('game');
    showContainer('win');
    muteSounds();
  }, 2000);
}

/**
 * Ends the game and shows the game over screen.
 * Clears all Intervalls and stop the game audio
 */
function gameOver() {
  muteSounds();
  // audioOnDuringGame ? gameLost.play() : gameLost.pause();
  setTimeout(() => {
    clearAllIntervals();
    hideContainer('game');
    showContainer('gameOver');
    hideContainer('win');
  }, 2000);
}

/**
 * Clears all intervals by stopping and removing all running intervals from the runningIntervals array
 * and using clearInterval method on all possible interval ids.
 */
function clearAllIntervals() {
  pauseGame();
  runningIntervals = [];
  for (let i = 1; i < 9999; i++) window.clearInterval(i);
}

/**
 * Starts the game by initializing the level, creating the world canvas and playing the game music.
 *Hides the welcome screen and displays the game screen.
 * @function initLevel() - creates objects (enemies, background and others)
 * @function init() - creates world with canvas
 */
function startGame() {
  if(!keyboardInfo){
  initLevel();
  init();
  audioOnDuringGame ? playMusic() : stopMusic();
  hideContainer('welcome-screen');
  hideContainer('start');
  hideContainer('win');
  showContainer('game');
  }
}

/**
 * plays the game music  and sets volume - also removes mute buttons opacity
 * the audioOn variable is set to true to indicate that the music is playing
 *
 */
function playMusic() {
  gameAudio.loop = true;
  gameAudio.play();
  world.character.volumeOfSoundsCharacter();
  world.volumeOfSounds();
  gameAudio.volume = 0.1;
  audioOn = true;
  removeOpacity('mute');
}

/**
 * stops the game music and sets volume to 0 - also adds mute buttons opacity
 * the audioOn variable is set to false to indicate that the music is not playing
 */
function stopMusic() {
  gameAudio.pause();
  addOpacity('mute');
  world.muteSounds();
  world.character.muteVolumeOfSoundsCharacter();
  audioOn = false;
}

function muteSounds() {
  world.muteSounds();
  world.character.muteVolumeOfSoundsCharacter();
  gameAudio.pause();
}

/**
 * toggles the game music on and off by checking the audioOn variable
 */
function toggleMusic() {
  // audioOn ? stopMusic() : playMusic();
  if (audioOn) {
    stopMusic();
    audioOnDuringGame= false;
  } else {
    playMusic();
    audioOnDuringGame = true;
  }
}

/**
 * This function requests full screen mode for the canvas element.
 *
 */
function fullscreen() {
  canvas.requestFullscreen();
}

/**
 * Listens to keyboard events and updates the keyboard object with the corresponding boolean values.
 * @param {object} e - The keyboard event object.
 */
window.addEventListener('keydown', (e) => {
  switch (e.key) {
    case 'ArrowLeft':
      keyboard.LEFT = true;
      break;
    case 'ArrowRight':
      keyboard.RIGHT = true;
      break;
    case 'ArrowUp':
      keyboard.UP = true;
      break;
    case 'd':
      keyboard.D = true;
      break;
    case ' ':
      keyboard.SPACE = true;
      break;
  }
});

/**
 * Listens for the "keyup" event and sets the corresponding keyboard key boolean value to false
 * @param {Object} e - the event object
 */
window.addEventListener('keyup', (e) => {
  switch (e.key) {
    case 'ArrowLeft':
      keyboard.LEFT = false;
      break;
    case 'ArrowRight':
      keyboard.RIGHT = false;
      break;
    case 'ArrowUp':
      keyboard.UP = false;
      break;
    case 'ArrowDown':
      keyboard.D = false;
      break;
    case ' ':
      keyboard.SPACE = false;
      break;
    case 'd':
      keyboard.D = false;
      break;
  }
});

/**
 * Call all Function  to be related to a mobile keyboard interface for the game
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
 * Sets event listeners for the mobile up button to activate and deactivate the character's throw bottle ability
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
 * Sets event listeners for the mobile up button to move the character to the left
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
 * Sets
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

/**
 * Shows the play information on the welcome screen.
 * Removes the 'd-none' class from the 'start' and 'information' elements and adds it to 'welcome-screen', 'win' and 'gameOver' elements.
 */
function showPlayInfo() {
  showContainer('start');
  showContainer('information');
  addStrongOpacity('welcome-screen');
  hideContainer('win');
  hideContainer('gameOver');
  keyboardInfo = true;
}

function showPlayInfoDuringGame() {
  showContainer('informationDuringGame');
  addStrongOpacity('canvas');
  addStrongOpacity('mobile-btn-right');
  addStrongOpacity('mobile-btn-left');
  addStrongOpacity('controls');
  hideContainer('win');
  hideContainer('gameOver');
  if (!pause) {
    toggleGame();
  }
}
function closeInformationDuringGame() {
  hideContainer('informationDuringGame');
  removeStrongOpacity('canvas');
  removeStrongOpacity('mobile-btn-right');;
  removeStrongOpacity('mobile-btn-left');
  removeStrongOpacity('controls');
  hideContainer('win');
  hideContainer('gameOver');
  if(pause){
    toggleGame();
  }
}

/**
 * Shows the information on the welcome screen.
 */
function closeInformation() {
  if (!pause) {
    hideContainer('information');
    removeStrongOpacity('welcome-screen');
    keyboardInfo = false;
  } else {
    closeInformationDuringGame();
  }
}

/**
 *  Shows the keyboard information on the welcome screen.
 */
function showKeyboardInfo() {
  if (!keyboardInfo) {
    showContainer('keyboard-info');
    keyboardInfo = true;
  } else {
    hideContainer('keyboard-info');
    keyboardInfo = false;
  }
}

// Screen size

/**
 * Check if the device is a mobile-device and show or hide the mobile-buttons.
 */
function checkMobile() {
  if (isMobileDevice()) {
    showMobileButton();
  } else {
    hideMobileButton();
  }
}

function showMobileButton() {
  showContainer('mobile-btn-right');
  showContainer('mobile-btn-left');
  hideContainer('btn-fullscreen');
}

function hideMobileButton() {
  showContainer('btn-fullscreen');
  hideContainer('mobile-btn-right');
  hideContainer('mobile-btn-left');
}
/**
 * Shows a message if the mobile-device is in the portrait-modus.
 */
function phoneRotateMessage() {
  if (screen.orientation.type === 'portrait-primary') {
    showContainer('rotate-screen');
    hideContainer('hide-mobile-portrait');
  } else {
    hideContainer('rotate-screen');
    showContainer('hide-mobile-portrait');
  }
}


/**
 * Check if the device is a mobile-device.
 * @returns {boolean} - true = is mobile
 */
function isMobileDevice() {
  const userAgent = navigator.userAgent;
  const isMobileByOrientation = typeof window.orientation !== 'undefined';
  const isMobileByUserAgent =
    /Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|XiaoMi|ONEPLUS A|OPPO|Pixel|vivo|Opera Mini/i.test(
      userAgent
    );

  return isMobileByOrientation || isMobileByUserAgent;
}

/**
 * Adds event listeners for the 'orientationchange', 'load', and 'resize' events and calls the 'checkMobile' function.
 * @event orientationchange - Event fired when the orientation of the device changes.
 * @event load - Event fired when the page is finished loading.
 * @event resize - Event fired when the window is resized.
 *
 */
window.addEventListener('orientationchange', checkMobile);
window.addEventListener('load', checkMobile);
window.addEventListener('resize', checkMobile);

/**
 * Help-Functions
 * @param {String} id - The id to be changed.
 */
function showContainer(id) {
  document.getElementById(`${id}`).classList.remove('d-none');
}

function hideContainer(id) {
  document.getElementById(`${id}`).classList.add('d-none');
}

function addOpacity(id) {
  document.getElementById(`${id}`).classList.add('opacity');
}
function removeOpacity(id) {
  document.getElementById(`${id}`).classList.remove('opacity');
}

function addStrongOpacity(id) {
  document.getElementById(`${id}`).classList.add('opacity-duringGame');
}
function removeStrongOpacity(id) {
  document.getElementById(`${id}`).classList.remove('opacity-duringGame');
}
