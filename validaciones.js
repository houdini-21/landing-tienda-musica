document
  .getElementById("enviar-btn")
  .addEventListener("click", function (e) {
    e.preventDefault();
    let email = document.getElementById("email").value;
    let nombre = document.getElementById("nombre").value;
    let producto = document.getElementById("producto").value;
    let descripcion = document.getElementById("descripcion").value;
    console.log(
      "email" +
        email +
        "nombre" +
        nombre +
        "producto" +
        producto +
        "descripcion" +
        descripcion
    );
    if (
      email === "" ||
      nombre === "" ||
      producto === "" ||
      descripcion === ""
    ) {
      alert("no dejes campos vacios");
    } else {
      alert(
        "Muchas gracias, como pudimos olvidar " +
          producto +
          " lo traeremos para ti " +
          nombre
      );
      limpiarcampos()
    }
  });

  function limpiarcampos () {
    nombre.value = ""
    email.value = ""
    producto.value = ""
    descripcion.value = ""
  }