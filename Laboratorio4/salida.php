<?php 
session_start();
include("conexion.php");
include("verificarsesion.php");
//vanessa
$correo_usuario = $_SESSION['correo'];
$sql = "SELECT c.id, u.correo AS receptor, c.asunto, c.estado 
        FROM correos c
        INNER JOIN usuarios u ON u.id = c.receptor_id
        WHERE c.emisor_id = (SELECT id FROM usuarios WHERE correo = ?)";
$stmt = $con->prepare($sql);
$stmt->bind_param("s", $correo_usuario);
$stmt->execute();
$resultado = $stmt->get_result();
?>
<table class="table table-striped table-bordered table-hover ">
    <thead>
        <tr>
            <th width="100px">Receptor</th>
            <th width="100px">Asunto</th>
            <th width="60px">Estado</th>
            <th width="10px">Operación</th>
        </tr>
    </thead>
    <?php while($row = $resultado->fetch_assoc()) { ?>
    <tr>
        <td><?= $row['receptor'] ?></td>
        <td><?= $row['asunto'] ?></td>
        <td><?= $row['estado'] ?></td>
        <td>
            <a href="javascript:verCorr(id=<?= $row['id'] ?>)">Ver</a>
            <a href="javascript:eliminar(id=<?= $row['id'] ?>)">Eliminar</a>
        </td>
    </tr>
    <?php } ?>
</table>