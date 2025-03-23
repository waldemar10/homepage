<?php


class Project{
    private $pdo;

    public function __construct(PDO $db){
        $this->pdo = $db;
    }

    public function getAllProjects(){
        try{
        $stmt = $this->pdo->prepare("SELECT * FROM projects");
        $stmt->execute();
        return $stmt->fetchAll();
        } catch (PDOException $e) {
            die('Database query failed: ' . $e->getMessage());
        }
    }
}