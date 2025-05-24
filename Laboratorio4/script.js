var modal = document.getElementById("myModal");
var openModalBtn = document.getElementById("openModalBtn");
var closeBtn = document.getElementsByClassName("close")[0];

function cargarContenido(abrir) {
  var contenedor;
  contenedor = document.getElementById("contenido");
  fetch(abrir)
    .then((response) => response.text())
    .then((data) => { console.log(data); });
}
function autenticar() {
  var datos = new FormData(document.querySelector("#form"));
  fetch("autenticar.php", { method: "POST", body: datos })
    .then((response) => response.json())
    .then((data) => {
      if (data.length === 0) {
        document.querySelector("#titulo-modal").innerHTML = "Error";
        document.querySelector("#contenido-modal").innerHTML = "Usuario o contraseña incorrectos";
        document.getElementById("myModal").style.display = "block";
        document.querySelector("#form").reset();
      }
      else {
      let rol = data[0].rol;
      if (rol == 1) {
        window.location.href = "administrador.php"; 
      }
      else {
         window.location.href = "usuario.php";
      }
    }
    });
}
mostrar = function () {
  modal.style.display = "block";
};

closeBtn.onclick = function () {
  modal.style.display = "none";
};

window.onclick = function (event) {
  if (event.target == modal) {
    modal.style.display = "none";
  }
};
function cargarCorreo() {
  fetch("correos.php")
    .then((response) => response.text())
    .then((data) => (document.querySelector("#resultado").innerHTML = data));
}
function verCorr(id) {
  fetch(`verCorreo.php?id=${id}`)
    .then((response) => response.text())
    .then((data) => {
      document.querySelector("#titulo-modal").innerHTML = "Ver Correo";
      document.querySelector("#contenido-modal").innerHTML = data;
      document.getElementById("myModal").style.display = "block";
    });
}
function eliminar(id) {
  var url = `eliminarcorreo.php?id=${id}`;
  fetch(url)
    .then((response) => response.text())
    .then((data) => {
      document.querySelector("#titulo-modal").innerHTML = "Mensaje"
      document.querySelector("#contenido-modal").innerHTML = data
      document.getElementById("myModal").style.display = "block";
      cargarCorreo();
    });
}
function insertar() {
  fetch("forminsertar.php")
    .then((response) => response.text())
    .then((data) => (document.querySelector("#resultado2").innerHTML = data));
}
function crear() {
  var datos = new FormData(document.querySelector("#form-crear"));

  fetch("create.php", { method: "POST", body: datos })
    .then((response) => response.text())
    .then((data) => (document.querySelector("#resultado2").innerHTML = data));
}
function ver() {
  fetch("verusuarios.php")
    .then((response) => response.text())
    .then((data) => (document.querySelector("#resultado2").innerHTML = data));
}
//vanessa
function cargarSalida() {
  fetch("salida.php")
    .then((response) => response.text())
    .then((data) => (document.querySelector("#resultado").innerHTML = data));
}