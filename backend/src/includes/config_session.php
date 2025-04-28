<?php

session_set_cookie_params([
    'path' => '/',
    'domain' => ($_SERVER['HTTP_HOST'] === 'localhost') ? '' : $_SERVER['HTTP_HOST'],
    'secure' => isset($_SERVER['HTTPS']),
    'httponly' => true, 
]);

session_start();

function generate_session()
{
    session_regenerate_id();
    $_SESSION["last_regeneration"] = time();
}

if (!isset($_SESSION["last_regeneration"])) {
    generate_session();
} else {
    $interval = 60 * 30;
    if (time() - $_SESSION["last_regeneration"] >= $interval) {
        generate_session();
    }
}
