"use strict";

let animation;
let frames;
let currentFrame = 0;
let intervalId;
let delay = 250;

window.onload = function () {
  const startButton = document.getElementById("start");
  const stopButton = document.getElementById("stop");
  const animationSelect = document.getElementById("animation");
  const fontSizeSelect = document.getElementById("fontsize");
  const turboCheckbox = document.getElementById("turbo");
  const textArea = document.getElementById("text-area");

  startButton.onclick = startAnimation;
  stopButton.onclick = stopAnimation;
  animationSelect.onchange = changeAnimation;
  fontSizeSelect.onchange = changeFontSize;
  turboCheckbox.onchange = changeSpeed;

  function startAnimation() {
    frames = textArea.value.split("=====\n");
    if (frames.length > 1) {
      startButton.disabled = true;
      stopButton.disabled = false;
      animationSelect.disabled = true;
      animation = setInterval(showNextFrame, delay);
    }
  }

  function stopAnimation() {
    clearInterval(animation);
    textArea.value = frames.join("=====\n");
    startButton.disabled = false;
    stopButton.disabled = true;
    animationSelect.disabled = false;
    currentFrame = 0;
  }

  function showNextFrame() {
    textArea.value = frames[currentFrame];
    currentFrame = (currentFrame + 1) % frames.length;
  }

  function changeAnimation() {
    const selectedAnimation = animationSelect.value;
    textArea.value = Animations[selectedAnimation] || "";
  }

  function changeFontSize() {
    textArea.style.fontSize = fontSizeSelect.value;
  }

  function changeSpeed() {
    delay = turboCheckbox.checked ? 50 : 250;
    if (animation) {
      clearInterval(animation);
      animation = setInterval(showNextFrame, delay);
    }
  }
};
