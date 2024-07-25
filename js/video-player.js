"use strict";

const playerVideoWrap = document.querySelector(".player"),
  playerVideo = document.querySelector(".player__video"),
  playerControls = document.querySelector(".player__controls"),
  playerPlayStopBtn = document.querySelector(".player__play-stop-btn"),
  playerIconPlay = document.querySelector(".player__icon--play"),
  playerIconPause = document.querySelector(".player__icon--pause");

let isPlaying = false;
let referenseEnter, referenseLeave;

function changeBtnIcon(buttonType) {
  switch (buttonType) {
    case "play": {
      playerIconPlay.classList.remove("player__icon--hidden");
      playerIconPause.classList.add("player__icon--hidden");
      break;
    }
    case "pause": {
      playerIconPlay.classList.add("player__icon--hidden");
      playerIconPause.classList.remove("player__icon--hidden");
      break;
    }
  }
}

function hideControls(isOn) {
  if (isOn) {
    playerControls.addEventListener(
      "mouseenter",
      (referenseEnter = () => {
        playerControls.classList.remove("player__controls--hidden");
      })
    );

    playerControls.addEventListener(
      "mouseleave",
      (referenseLeave = () => {
        playerControls.classList.add("player__controls--hidden");
      })
    );
  } else {
    playerControls.removeEventListener("mouseenter", referenseEnter);
    playerControls.removeEventListener("mouseleave", referenseLeave);
    playerControls.classList.remove("player__controls--hidden");
  }
}

function play() {
  playerVideo.play();
  isPlaying = true;
  changeBtnIcon("pause");
  hideControls(true);
}

function pause() {
  playerVideo.pause();
  isPlaying = false;
  changeBtnIcon("play");
  hideControls(false);
}

function playerHandler() {
  if (isPlaying) {
    pause();
  } else {
    play(0);
  }
}

playerVideoWrap.addEventListener("click", (e) => {
  const target = e.target;

  if (target === playerPlayStopBtn) {
    playerHandler();
  }
});

playerVideo.addEventListener("ended", () => {
  changeBtnIcon("play");
  hideControls(false);
  isPlaying = false;
});
