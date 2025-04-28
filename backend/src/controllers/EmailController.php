<?php

include_once __DIR__ . '/../services/EmailService.php';

class EmailController
{
    private $emailService;
    public function __construct()
    {
        $this->emailService = new EmailService();
    }

    public function send()
    {
        if ($_SERVER["REQUEST_METHOD"] !== "POST") {
            http_response_code(405);
            echo json_encode(["error" => "Method Not Allowed"]);
            return;
        }

        $inputData = json_decode(file_get_contents('php://input'), true);

        if (json_last_error() !== JSON_ERROR_NONE) {
            http_response_code(400);
            echo json_encode(["error" => "Invalid JSON data"]);
            return;
        }

        $name = htmlspecialchars($inputData['name'] ?? '');
        $email = htmlspecialchars($inputData['email'] ?? '');
        $msg = htmlspecialchars($inputData['msg'] ?? '');
        $captcha = htmlspecialchars($inputData['captcha'] ?? '');

        $result = $this->emailService->sendMail($name, $email, $msg, $captcha);

        if ($result['success']) {
            echo json_encode(["success" => true, "message" => "Email sent successfully"]);
        } else {
            echo json_encode(["success" => false, "errors" => $result['errors']]);
        }

    }
}
