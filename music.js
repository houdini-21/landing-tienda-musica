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


function play(h) {
  const icon = document.getElementById(h.id);
  const pause = icon.classList.toggle("fa-pause");
  const play = icon.classList.toggle("fa-play");
  console.log(h)
  switch (h.id) {

    case "play1":
      if (pause === true) {
        play1.play();
      } else {
        play1.pause();
      }
      break;

    case "play2":
      if (pause === true) {
        play2.play();
      } else {
        play2.pause();
      }
      break;

    case "play3":
      if (pause === true) {
        play3.play();
      } else {
        play3.pause();
      }
      break;

    case "play4":
      if (pause === true) {
        play4.play();
      } else {
        play4.pause();
      }
      break;

    case "play5":
      if (pause === true) {
        play5.play();
      } else {
        play5.pause();
      }
      break;
    case "play6":
      if (pause === true) {
        play6.play();
      } else {
        play6.pause();
      }
      break;
    case "play7":
      if (pause === true) {
        play7.play();
      } else {
        play7.pause();
      }
      break;
    case "play8":
      if (pause === true) {
        play8.play();
      } else {
        play8.pause();
      }
      break;
    case "play9":
      if (pause === true) {
        play9.play();
      } else {
        play9.pause();
      }
      break;
    case "play10":
      if (pause === true) {
        play10.play();
      } else {
        play10.pause();
      }
      break;
  }

}
