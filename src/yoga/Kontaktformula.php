

<?php
echo "<body style=\"background-color: black\">";
echo "<font style=\"color: white\">";
echo "<span style=\"font-size: 20pt\">";
$email = $_GET["email"];

if(!filter_var($email, FILTER_VALIDATE_EMAIL)=== false){
echo("<center>Ihre Nachricht wurde versendet.</center>");
} else{
  echo("<center>Ihre Nachricht konnte nicht gesendet werden.</center>");
}

  
  ?>
 