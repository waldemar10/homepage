<?php

class Router
{
    private $routes = [];

    public function addRoute($method, $path, $handler)
    {
        $this->routes[strtoupper($method)][$path] = $handler;
    }

    public function handle($method, $uri)
{
    $path = parse_url($uri, PHP_URL_PATH);
    $basePath = "/backend/public/index.php";
    
    $basePath = rtrim($basePath, '/');
    $path = rtrim($path, '/');

    if (strpos($path, $basePath) === 0) {
        $path = substr($path, strlen($basePath));
    }

    if (isset($this->routes[$method][$path])) {
        call_user_func($this->routes[$method][$path]);
    } else {
        http_response_code(404);
        echo json_encode(["error" => "Route not found"]);
    }
}

}
