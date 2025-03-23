<?php

require_once __DIR__ . '/../controllers/ProjectController.php';

$projectController = new ProjectController($pdo);

$router->addRoute('GET', '/projects', function() use ($projectController) {
    echo json_encode($projectController->getProjects());
});
