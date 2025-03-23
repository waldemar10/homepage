<?php 

include_once __DIR__ . '/../models/Project.php';

class ProjectController {

    private $project;

    public function __construct($pdo){
        $this->project = new Project($pdo);
    }
   public function getProjects(){
        $projects = $this->project->getAllProjects();
        return $projects;
    }
}