<?php

require_once __DIR__ . '/../controllers/I18nController.php';

$i18nController = new I18nController();

$router->addRoute('GET', '/i18n', function() use ($i18nController) {
    echo $i18nController->getTranslation();
});