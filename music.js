let play1 = new Audio("./music/marioneta.mp3");
let play2 = new Audio("./music/rey&as.mp3");
let play3 = new Audio("./music/fosterthepeople.mp3");
let play4 = new Audio("./music/rezz.mp3");
let play5 = new Audio("./music/daftpunk.mp3");
let play6 = new Audio("./music/ninocohete.mp3");
let play7 = new Audio("./music/porterrobinson.mp3");
let play8 = new Audio("./music/madeon.mp3");
let play9 = new Audio("./music/echosmith.mp3");
let play10 = new Audio("./music/pixies.mp3");

document.getElementById("play1").addEventListener("click", function () {
  const icon = document.getElementById("playbutton1");
  const pause = icon.classList.toggle("fa-pause");
  const play = icon.classList.toggle("fa-play");

  if (pause === true) {
    play1.play();
  } else {
    play1.pause();
  }
});

document.getElementById("play2").addEventListener("click", function () {
  const icon = document.getElementById("playbutton2");
  const pause = icon.classList.toggle("fa-pause");
  const play = icon.classList.toggle("fa-play");
  
  if (pause === true) {
    play2.play();
  } else {
    play2.pause();
  }
});

document.getElementById("play3").addEventListener("click", function () {
  const icon = document.getElementById("playbutton3");
  const pause = icon.classList.toggle("fa-pause");
  const play = icon.classList.toggle("fa-play");
  if (pause === true) {
    play3.play();
  } else {
    play3.pause();
  }
});

document.getElementById("play4").addEventListener("click", function () {
  const icon = document.getElementById("playbutton4");
  const pause = icon.classList.toggle("fa-pause");
  const play = icon.classList.toggle("fa-play");

  if (pause === true) {
    play4.play();
  } else {
    play4.pause();
  }
});

document.getElementById("play5").addEventListener("click", function () {
  const icon = document.getElementById("playbutton5");
  const pause = icon.classList.toggle("fa-pause");
  const play = icon.classList.toggle("fa-play");

  if (pause === true) {
    play5.play();
  } else {
    play5.pause();
  }
});

document.getElementById("play6").addEventListener("click", function () {
  const icon = document.getElementById("playbutton6");
  const pause = icon.classList.toggle("fa-pause");
  const play = icon.classList.toggle("fa-play");
  if (pause === true) {
    play6.play();
  } else {
    play6.pause();
  }
});

document.getElementById("play7").addEventListener("click", function () {
  const icon = document.getElementById("playbutton7");
  const pause = icon.classList.toggle("fa-pause");
  const play = icon.classList.toggle("fa-play");

  if (pause === true) {
    play7.play();
  } else {
    play7.pause();
  }
});

document.getElementById("play8").addEventListener("click", function () {
  const icon = document.getElementById("playbutton8");
  const pause = icon.classList.toggle("fa-pause");
  const play = icon.classList.toggle("fa-play");

  if (pause === true) {
    play8.play();
  } else {
    play8.pause();
  }
});

document.getElementById("play9").addEventListener("click", function () {
  const icon = document.getElementById("playbutton9");
  const pause = icon.classList.toggle("fa-pause");
  const play = icon.classList.toggle("fa-play");

  if (pause === true) {
    play9.play();
  } else {
    play9.pause();
  }
});

document.getElementById("play10").addEventListener("click", function () {
  const icon = document.getElementById("playbutton10");
  const pause = icon.classList.toggle("fa-pause");
  const play = icon.classList.toggle("fa-play");

  if (pause === true) {
    play10.play();
  } else {
    play10.pause();
  }
});
