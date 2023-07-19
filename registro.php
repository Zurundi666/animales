<?php 

session_start(); 

include "basededatos.php";

if (isset($_POST['e-mail']) && isset($_POST['password'])) {

    $name = $_POST['nombre'];

    $e_mail =$_POST['e-mail'];

    $pass =$_POST['password'];

    if (empty($name)){

        header("Location: index.php?error=User Name is required");

        exit();

    }else if(empty($pass)){
        header("Location: index.php?error=Password is required");

        exit();

    }else{

        $names= "insert into usuario (nombre,correo,contraseña) values ('$name','$e_mail','$pass')";
        if ($conn->query($names) === TRUE) {
            header("Location: inicio.html");
            exit();
        } else {
           header("Location: registro.html");
           exit();    
        }
    }
 }       

?>