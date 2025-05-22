<?php session_start();
include("conexion.php");

$correo = $_POST['correo'];
$password = sha1($_POST['password']);
$stmt = $con->prepare('SELECT nombre,correo,rol FROM usuarios WHERE correo=? AND contraseña=?');
$stmt->bind_param("ss", $correo, $password);
$stmt->execute();
$result = $stmt->get_result();
if ($result->num_rows > 0) {
    echo "Usuario encontrado";
    $_SESSION['email'] = $correo;
    $_SESSION['rol'] = $result->fetch_assoc()['rol'];
    header("Location:pagina.php");

} else {
    echo "Error datos de autenticación incorrectos";
    ?>
    <meta http-equiv="refresh" content="3;url=formlogin.html">
    <?php
}

?>