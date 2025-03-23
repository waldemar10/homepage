<?php

header("Content-Type: application/json");

require_once __DIR__ . '/../src/config/dbh_inc.php';
require_once __DIR__ . '/../src/core/Router.php';

$router = new Router();

require_once __DIR__ . '/../src/routes/projects.php';

$router->handle($_SERVER['REQUEST_METHOD'], $_SERVER['REQUEST_URI']);