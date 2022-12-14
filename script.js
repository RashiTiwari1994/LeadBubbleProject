"use strict";

//const { sortUserPlugins } = require("vite");

const closeBtn = document.querySelector(".close");
const smImg = document.querySelector(".sm-img");
const play = document.querySelector(".play");
const pause = document.querySelector("sound");
const previous = document.querySelector(".previous");
const video = document.getElementById("myVideo");

const icon = document.querySelector(".icon");
const lgImgBox = document.querySelector(".lg-img");
const lgClose = document.querySelector(".lg-close");
const sound = document.querySelector(".sound");
const soundOn = document.querySelector(".soundOn");
const mute = document.querySelector(".mute");

closeBtn.addEventListener("click", function () {
  smImg.classList.add("hidden");
});

play.addEventListener("click", function () {
  if (video.paused) {
    video.play();
    icon.classList.replace("fa-play", "fa-pause");
  } else {
    video.pause();
    icon.classList.replace("fa-pause", "fa-play");
  }
});

lgClose.addEventListener("click", function () {
  lgImgBox.classList.add("hidden");
});

smImg.addEventListener("click", function () {
  lgImgBox.classList.remove("hidden");
});

sound.addEventListener("click", function (e) {
  soundOn.classList.replace("fa-volume-up", "fa-volume-mute");
});

previous.addEventListener("click", function () {
  video.currentTime = 0;
});
