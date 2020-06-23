let play1 = new Audio("./music/marioneta.mp3");
let play2 = new Audio("./music/reyyas.mp3");

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
});

document.getElementById("play4").addEventListener("click", function () {
  const icon = document.getElementById("playbutton4");
  const pause = icon.classList.toggle("fa-pause");
  const play = icon.classList.toggle("fa-play");
});

document.getElementById("play5").addEventListener("click", function () {
  const icon = document.getElementById("playbutton5");
  const pause = icon.classList.toggle("fa-pause");
  const play = icon.classList.toggle("fa-play");
});

document.getElementById("play6").addEventListener("click", function () {
  const icon = document.getElementById("playbutton6");
  const pause = icon.classList.toggle("fa-pause");
  const play = icon.classList.toggle("fa-play");
});

document.getElementById("play7").addEventListener("click", function () {
  const icon = document.getElementById("playbutton7");
  const pause = icon.classList.toggle("fa-pause");
  const play = icon.classList.toggle("fa-play");
});

document.getElementById("play8").addEventListener("click", function () {
  const icon = document.getElementById("playbutton8");
  const pause = icon.classList.toggle("fa-pause");
  const play = icon.classList.toggle("fa-play");
});

document.getElementById("play9").addEventListener("click", function () {
  const icon = document.getElementById("playbutton9");
  const pause = icon.classList.toggle("fa-pause");
  const play = icon.classList.toggle("fa-play");
});

document.getElementById("play10").addEventListener("click", function () {
  const icon = document.getElementById("playbutton10");
  const pause = icon.classList.toggle("fa-pause");
  const play = icon.classList.toggle("fa-play");
});
