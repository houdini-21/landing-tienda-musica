const links = document.querySelectorAll(".navbar ul a");
let itemMenu = document.querySelectorAll(".container");
let inicio = document.getElementById("inicionav");
let categorias = document.getElementById("categoriasnav");
let vendidos = document.getElementById("masvendidosnav");
let contactanos = document.getElementById("contactanosnav");

for (const link of links) {
  link.addEventListener("click", clickHandler);
}

function clickHandler(e) {
  e.preventDefault();
  const href = this.getAttribute("href");

  document.querySelector(href).scrollIntoView({
    behavior: "smooth",
    block: "start",
  });
}

window.addEventListener("scroll", () => {
  if (scrollY >= 0 && scrollY <= 755) {
    inicio.classList.add("active");
    vendidos.classList.remove("active");
    contactanos.classList.remove("active");
    categorias.classList.remove("active");
  } else if (scrollY >= 758 && scrollY <= 1420) {
    categorias.classList.add("active");
    vendidos.classList.remove("active");
    contactanos.classList.remove("active");
    inicio.classList.remove("active");
  } else if (scrollY >= 1423 && scrollY <= 2165) {
    vendidos.classList.add("active");
    categorias.classList.remove("active");
    contactanos.classList.remove("active");
    inicio.classList.remove("active");
  } else if (scrollY >= 2166 && scrollY <= 2422) {
    contactanos.classList.add("active");
    vendidos.classList.remove("active");
    categorias.classList.remove("active");
    inicio.classList.remove("active");
  }
});

function like(h) {
  const icon = document.getElementById(h.id);
  console.log(icon);
  const dislike = icon.classList.toggle("fal");
  const like = icon.classList.toggle("fas");
}

function volver() {
  document.getElementById("categorias-section").style.display = "block";
  document.getElementById("electronica-section").style.display = "none";
  document.getElementById("latino-section").style.display = "none";
  document.getElementById("hip-section").style.display = "none";
  document.getElementById("rap-section").style.display = "none";
  document.getElementById("pop-section").style.display = "none";
  document.getElementById("nortena-section").style.display = "none";
  document.getElementById("rock-section").style.display = "none";
  document.getElementById("indie-section").style.display = "none";
}

document.getElementById("electronica").addEventListener("click", function () {
  document.getElementById("categorias-section").style.display = "none";
  document.getElementById("electronica-section").style.display = "block";
});

document.getElementById("latino").addEventListener("click", function () {
  document.getElementById("categorias-section").style.display = "none";
  document.getElementById("latino-section").style.display = "block";
});

document.getElementById("hiphop").addEventListener("click", function () {
  document.getElementById("categorias-section").style.display = "none";
  document.getElementById("hip-section").style.display = "block";
});

document.getElementById("rap").addEventListener("click", function () {
  document.getElementById("categorias-section").style.display = "none";
  document.getElementById("rap-section").style.display = "block";
});

document.getElementById("nortena").addEventListener("click", function () {
  document.getElementById("categorias-section").style.display = "none";
  document.getElementById("nortena-section").style.display = "block";
});

document.getElementById("pop").addEventListener("click", function () {
  document.getElementById("categorias-section").style.display = "none";
  document.getElementById("pop-section").style.display = "block";
});
document.getElementById("rock").addEventListener("click", function () {
  document.getElementById("categorias-section").style.display = "none";
  document.getElementById("rock-section").style.display = "block";
});
document.getElementById("indie").addEventListener("click", function () {
  document.getElementById("categorias-section").style.display = "none";
  document.getElementById("indie-section").style.display = "block";
});
/*


 

let heart = document.querySelectorAll('#like')
let option = document.querySelectorAll('i .btn-heart')

console.log(option)


document.getElementById("like").addEventListener("click", function () {
  // const icon = document.getElementById("heart");
  //const dislike = icon.classList.toggle("fal");
  //const like = icon.classList.toggle("fas");
  alert("click");
});

function like() {
  alert("click");
  // const dislike = icon.classList.toggle("fal");
  //const like = icon.classList.toggle("fas");
}

/* 
inicio offsetTop = 0
Categorias offsetTop = 760 a 1425
masvendidos offsetTop = 1429 a 2175
contactanos offsetTop = 2178 a 2422
*/
