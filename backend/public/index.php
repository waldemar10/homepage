<?php

header("Content-Type: application/json");

if ($_SERVER['REQUEST_METHOD'] == 'OPTIONS') {
    http_response_code(204);
    exit;
}

require_once __DIR__ . '/../src/config/dbh_inc.php';
require_once __DIR__ . '/../src/core/Router.php';
require_once __DIR__ . '/../vendor/autoload.php';

$router = new Router();

require_once __DIR__ . '/../src/routes/projects.php';
require_once __DIR__ . '/../src/routes/i18n.php';
require_once __DIR__ . '/../src/routes/contact.php';

$router->handle($_SERVER['REQUEST_METHOD'], $_SERVER['REQUEST_URI']);