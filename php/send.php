<?php

    
    var_dump($_POST);
    $name = $_POST['name'];
    $phone = $_POST['phone'];
    $msg = $_POST['message'];
    $what = $_POST['what'];

    echo $name . "<br>" . $phone . "<br>" .$msg . "<br>" . $what;

    // $to = 'reabko15@gmail.com';

    // $subject = 'Заявка с сайта детский праздник';
    // $message = " 
    // Письмо отправленна из моей формы
    // Пользователь хочет: ".htmlspecialchars($what)." 
    // Имя: ".htmlspecialchars($name)." 
    // Телефон:".htmlspecialchars($phone)."
    // Сообщения:".htmlspecialchars($msg);

    // $headers = "From mysite.ru <site-eamil@mysite.ru> \r\nContent-type: text/html; charset=utf-8 \r\n";
    // mail($to,$subject,$message,$headers);
    // header('location: index.html');
    // exit();


?>