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
function cargarSalida() {
  fetch("salida.php")
    .then((response) => response.text())
    .then((data) => (document.querySelector("#resultado").innerHTML = data));
}

/////////////////// redactar correo ///////////////////

function mostrarModalRedactar() {
    const modal = document.getElementById("modalRedactar");
    modal.style.display = "flex";
    modal.classList.add("show");
}

function cerrarModalRedactar() {
    const modal = document.getElementById("modalRedactar");
    modal.style.display = "none";
    modal.classList.remove("show");
}

function guardarBorrador() {
    const correo = document.getElementById("correo").value;
    const asunto = document.getElementById("asunto").value;
    const mensaje = document.getElementById("mensaje").value;
    
    // Aquí puedes implementar la lógica para guardar el borrador
    alert("Borrador guardado");
    cerrarModalRedactar();
}

function enviarCorreo() {
    const correo = document.getElementById("correo").value;
    const asunto = document.getElementById("asunto").value;
    const mensaje = document.getElementById("mensaje").value;
    
    // Aquí puedes implementar la lógica para enviar el correo
    alert("Correo enviado");
    cerrarModalRedactar();
}

// Agregar event listeners para cerrar el modal
document.addEventListener('DOMContentLoaded', function() {
    const modal = document.getElementById("modalRedactar");
    const closeBtn = modal.getElementsByClassName("close")[0];
    
    closeBtn.onclick = function() {
        cerrarModalRedactar();
    }
    
    window.onclick = function(event) {
        if (event.target == modal) {
            cerrarModalRedactar();
        }
    }
});
