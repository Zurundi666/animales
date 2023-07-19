<?php
   /*
     En este caso session_start() se necesita para
     poder recuperar el valor de la sesión
   */
   //session_start();
   //$_SESSION['nombre'] nombre es una variable global

   echo($_SESSION['nombre'].'Otra página');//Recuperamos el valor de la 
 
?>