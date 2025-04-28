<?php

require_once __DIR__ . '/../controllers/EmailController.php';

$emailController = new EmailController();

$router->addRoute('POST', '/contact/email', function() use ($emailController){
   $emailController->send();
});