<?php 

session_start(); 

include "basededatos.php";

if (isset($_POST['e-mail']) && isset($_POST['password'])) {
    
    $e_mail =$_POST['e-mail'];

    $pass =$_POST['password'];

    if (empty($e_mail)){

        header("Location: index.php?error=User Name is required");

        exit();

    }else if(empty($pass)){
        header("Location: index.php?error=Password is required");

        exit();

    }else{
      $names= "select * from usuario where correo='$e_mail' and contraseña='$pass'";
        $result = $conn->query($names);
        if ($result->num_rows > 0){
            header("Location: ./pprincipal.html");
            exit();
        }else{
         header("Location: ./inicio.html");
          exit();
        }
    }
 }   
?>


