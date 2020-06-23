function changeclass1() {
  document.getElementById("navbutton1").classList.add("active");
  document.getElementById("navbutton2").classList.remove("active");
  document.getElementById("navbutton3").classList.remove("active");
  document.getElementById("navbutton4").classList.remove("active");
}

function changeclass2() {
  document.getElementById("navbutton2").classList.add("active");
  document.getElementById("navbutton1").classList.remove("active");
  document.getElementById("navbutton3").classList.remove("active");
  document.getElementById("navbutton4").classList.remove("active");
}

function changeclass3() {
  document.getElementById("navbutton3").classList.add("active");
  document.getElementById("navbutton1").classList.remove("active");
  document.getElementById("navbutton2").classList.remove("active");
  document.getElementById("navbutton4").classList.remove("active");
}
function changeclass4() {
  document.getElementById("navbutton4").classList.add("active");
  document.getElementById("navbutton1").classList.remove("active");
  document.getElementById("navbutton2").classList.remove("active");
  document.getElementById("navbutton3").classList.remove("active");
}




