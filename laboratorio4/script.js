var modal = document.getElementById("myModal");
var openModalBtn = document.getElementById("openModalBtn");
var closeBtn = document.getElementsByClassName("close")[0];
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