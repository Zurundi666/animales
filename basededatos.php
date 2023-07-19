<?php
$usuario= "root";
$contrasena="";
$based="animales";
$ser= "localhost";

$conn = new mysqli($ser,$usuario, $contrasena,$based);

// Verifica si hay algún error en la conexión
if ($conn->connect_error) {
    die("Error al conectar a la base de datos: " . $conn->connect_error);
}

// Aquí puedes ejecutar consultas y trabajar con la base de datos

// Cierra la conexión cuando hayas terminado

?>
