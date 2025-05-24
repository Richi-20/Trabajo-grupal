<?php
session_start();
require("verificarsesion.php");
?>
<!DOCTYPE html>
<html lang="en">

<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Document</title>
    <link rel="stylesheet" href="estilos.css">
    
</head>

<body>
    <div class="contenedor">
        <div class="bandejas">
            
            <button id="entrada"><a href="javascript:cargarCorreo()">Bandeja de Entrada</a></button>
            <br><br>
           <!--vanessa-->
            <button id="salida"><a href="javascript:cargarSalida()">Bandeja de Salida</a></button>
        </div>
        <div class="conte">
            <div class="redactar">
                <button id="redacta">Redactar</button>
            </div>
            <div id="resultado">

            </div>

        </div>
    </div>
    <div id="myModal" class="modal">
        <div class="modal-content">
            <span class="close">&times;</span>
            <h2 id="titulo-modal">Título del Modal</h2>
            <div id="contenido-modal">

            </div>
        </div>
    </div>
<script src="script.js"></script>
</body>

</html>