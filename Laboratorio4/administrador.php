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
    
</head>
<body>
    <div class="contenedor">
        <button><a href="javascript:insertar()">Agregar</a></button>
        <button><a href="javascript:ver()">ver</a></button>
    </div>
     <div id="resultado2">

     </div>
     <script src="script.js"></script>
</body>
</html>