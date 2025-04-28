<?php

use PHPMailer\PHPMailer\PHPMailer;

class EmailService
{
    function sendMail($name, $email, $msg, $captcha)
    {
        $errors = [];

        if (empty($name)) {
            $errors["name"] = "Please enter your name.";
        }
        if (empty($email)) {
            $errors["email"] = "Please enter your email.";
        } elseif (!filter_var($email, FILTER_VALIDATE_EMAIL)) {
            $errors["email"] = "Wrong email.";
        }
        if (empty($msg)) {
            $errors["msg"] = "Please enter your message.";
        }
        if (empty($captcha)) {
            $errors["captcha"] = "Captcha is required.";
        } else {
            $secretKey = $_ENV['HCAPTCHA_SECRET_KEY'];
            $verifyUrl = 'https://hcaptcha.com/siteverify';
            $data = [
                'secret' => $secretKey,
                'response' => $captcha
            ];
            $ch = curl_init();
            curl_setopt($ch, CURLOPT_URL, $verifyUrl);
            curl_setopt($ch, CURLOPT_POST, true);
            curl_setopt($ch, CURLOPT_POSTFIELDS, http_build_query($data));
            curl_setopt($ch, CURLOPT_RETURNTRANSFER, true);

            $response = curl_exec($ch);
            curl_close($ch);

            $responseData = json_decode($response, true);

            if (!isset($responseData['success']) || $responseData['success'] !== true) {
                $errors["captcha"] = "Captcha is invalid.";
            }
        }

        if (!empty($errors)) {
            return ["success" => false, "errors" => $errors];
        }

        $mail = new PHPMailer(true);
        try {
            $mail->isSMTP();
            $mail->Host = $_ENV['SMTP_HOST'];
            $mail->SMTPAuth = true;
            $mail->Username = $_ENV['SMTP_USER'];
            $mail->Password = $_ENV['SMTP_PASS'];
            $mail->SMTPSecure = PHPMailer::ENCRYPTION_STARTTLS;
            $mail->Port = $_ENV['SMTP_PORT'];

            $mail->setFrom($email, $name);
            $mail->addAddress('waljuscontact@gmail.com', 'Admin');

            $mail->isHTML(true);
            $mail->Subject = 'Neue Kontaktanfrage';
            $mail->Body = "<p><strong>Name:</strong> $name</p>
                          <p><strong>E-Mail:</strong> $email</p>
                          <p><strong>Nachricht:</strong></p>
                          <p>$msg</p>";
            $mail->AltBody = "Name: $name\nE-Mail: $email\nNachricht:\n$msg";

            $mail->send();

            return ["success" => true];
        } catch (Exception $e) {
            return ["success" => false, "errors" => $errors];

        }
    }
}
