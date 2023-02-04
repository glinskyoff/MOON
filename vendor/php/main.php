<?php
    require_once 'connect.php';

    $username = $_POST['username'];
    $email = $_POST['email'];
    $message = $_POST['message'];

    if (empty($username && $email && $message)) {
        echo 'Заполните пустые поля';
    } else {
        $result_add = mysqli_query($connect, "INSERT INTO `form`(`id`, `name`, `email`, `message`) VALUES (NULL, '$username','$email','$message')");
    
        if (!$result_add) {
            echo 'Не удалось добавить запись';
        } else {
            echo 'Сообщение успешно добавлено';
        }
    }

?>