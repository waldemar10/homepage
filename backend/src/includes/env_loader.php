<?php
function loadEnv($envFile)
{
    if (!file_exists($envFile)) {
        die("Fehler: $envFile nicht gefunden!");
    }

    $lines = file($envFile, FILE_IGNORE_NEW_LINES | FILE_SKIP_EMPTY_LINES);
    foreach ($lines as $line) {
        if (strpos(trim($line), '#') === 0)
            continue;
        list($name, $value) = explode('=', $line, 2);
        $_ENV[trim($name)] = trim($value);
    }
}

$env = getenv('APP_ENV') ?: 'development';

$envFile = $env === 'development' ? __DIR__ . "/../../../.env.development" : __DIR__ . "/../../../.env.production";

loadEnv($envFile);
