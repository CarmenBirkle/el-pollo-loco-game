let canvas;
let world;
let keyboard = new Keyboard();
let audioOn = false;
let keyboardInfo = false;
let pause = false;
let runningIntervals = [];

gameAudio = new Audio('audio/music.mp3');

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
 * Adds a new function to the active intervals that will be executed at regular intervals.
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
 *
 */
function restart() {
  clearAllIntervals();
  gameAudio.pause();
  document.getElementById('win').classList.add('d-none');
  document.getElementById('gameOver').classList.add('d-none');
  document.getElementById('pause').classList.remove('opacity');
  // location.reload();
  startGame();
}

/**
 * Adds the 'opacity' class to the 'pause' button to make it semi-transparent, pauses all active intervals
 * using the pauseIntervals function, and stops the game music using the stopMusic function.
 *
 */
function pauseGame() {
  // hideContainer('pause-button');
  // showContainer('start-after-pause-button');
  document.getElementById('pause').classList.add('opacity');
  pauseIntervals();
  stopMusic();
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
  document.getElementById('pause').classList.remove('opacity');
  // showContainer('pause-button');
  // hideContainer('start-after-pause-button');
  playIntervals();
  playMusic();
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
  clearAllIntervals();
  document.getElementById('game').classList.add('d-none');
  document.getElementById('win').classList.remove('d-none');
  gameAudio.pause();
}

/**
 * Ends the game and shows the game over screen.
 * Clears all Intervalls and stop the game audio
 */
function gameOver() {
  clearAllIntervals();
  document.getElementById('game').classList.add('d-none');
  document.getElementById('gameOver').classList.remove('d-none');
  document.getElementById('win').classList.add('d-none');
  gameAudio.pause();
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
  initLevel();
  init();
  playMusic();
  document.getElementById('start').classList.add('d-none');
  document.getElementById('welcome-screen').classList.add('d-none');
  document.getElementById('game').classList.remove('d-none');
  document.getElementById('win').classList.add('d-none');
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
  gameAudio.volume = 0.1;
  audioOn = true;
  document.getElementById('mute').classList.remove('opacity');
}

/**
 * stops the game music and sets volume to 0 - also adds mute buttons opacity
 * the audioOn variable is set to false to indicate that the music is not playing
 */
function stopMusic() {
  gameAudio.pause();
  document.getElementById('mute').classList.add('opacity');
  world.muteSounds();
  world.character.muteVolumeOfSoundsCharacter();
  audioOn = false;
}

/**
 * toggles the game music on and off by checking the audioOn variable
 */
function toggleMusic() {
  if (audioOn) {
    stopMusic();
  } else {
    playMusic();
  }
}

/**
 * This function requests full screen mode for the canvas element.
 *
 */
function fullscreen() {
  canvas.requestFullscreen();
}

// function fullscreen(element) {
//   if (element.requestFullscreen) {
//     element.requestFullscreen();
//   } else if (element.msRequestFullscreen) {
//     // for IE11 (remove June 15, 2022)
//     element.msRequestFullscreen();
//   } else if (element.webkitRequestFullscreen) {
//     // iOS Safari
//     element.webkitRequestFullscreen();
//   }
// }

// function exitFullscreen() {
//   if (
//     document.fullscreenElement ||
//     document.webkitFullscreenElement ||
//     document.msFullscreenElement
//   ) {
//     if (document.exitFullscreen) {
//       document.exitFullscreen();
//     } else if (document.webkitExitFullscreen) {
//       document.webkitExitFullscreen();
//     } else if (document.msExitFullscreen) {
//       document.msExitFullscreen();
//     }
//   }
// }

//  document.addEventListener('fullscreenchange', function () {
//    if (document.fullscreenElement === null) {
//      isFullscreenActive = true;
//      fullscreenOpenAndClose();
//    }
//  });

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
  document.getElementById('start').classList.remove('d-none');
  document.getElementById('information').classList.remove('d-none');
  document.getElementById('welcome-screen').classList.add('d-none');
  document.getElementById('win').classList.add('d-none');
  document.getElementById('gameOver').classList.add('d-none');
}
/**
 * Shows the information on the welcome screen.
 */
function closeInformation() {
  document.getElementById('information').classList.add('d-none');
  document.getElementById('welcome-screen').classList.remove('d-none');
}
/**
 *  Shows the keyboard information on the welcome screen.
 */
function showKeyboardInfo() {
  if (!keyboardInfo) {
    document.getElementById('keyboard-info').classList.remove('d-none');
    keyboardInfo = true;
  } else {
    document.getElementById('keyboard-info').classList.add('d-none');
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
    console.log('mobile');
    // phoneRotateMessage();
  } else {
    // phoneRotateMessage();
    console.log('not mobile');
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
  } else {
    hideContainer('rotate-screen');
  }
}

/**
 * Check if the device is a mobile-device.
 * @returns {boolean} - true = is mobile
 */
// function isMobileDevice() {
//   return /Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(
//     navigator.userAgent
//   );
// }

// function isMobileDevice() {
//   return (
//     typeof window.orientation !== 'undefined' ||
//     navigator.userAgent.indexOf('IEMobile') !== -1
//   );
// }

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

function showFullscreenSize(id) {
  document.getElementById(`${id}`).classList.add('fullscreen-size');
}

function hideFullscreenSize(id) {
  document.getElementById(`${id}`).classList.remove('fullscreen-size');
}

// .fullscreen-size {
//   height: 67vh !important;
//   width: 100% !important;
// }

function hideLoader() {
  document.getElementById('loader').classList.add('loader-hidden');
}
