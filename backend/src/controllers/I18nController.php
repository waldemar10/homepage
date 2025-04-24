<?php

class I18nController{
    public function getTranslation(){
        $lang = $_GET['lang'] ?? 'en';
        $ns = $_GET['ns'] ?? 'common';
        
        $filePath = __DIR__ . '/../../public/locales/' . $lang . '/' . $ns . '.json';
        if (!file_exists($filePath)) {
            http_response_code(404);
            echo json_encode(['error' => 'Translation not found']);
            return;
        }
        $json = file_get_contents($filePath);
        return $json;

    }
}