<?php

$to = "safeermohammed13190@yahoo.co.uk";

$name = $_POST['name'];
$email = $_POST['email'];
$phone = $_POST['phone'];
$subject = $_POST['subject'];
$headers = $email;
$message = "Name: \t$name\r\nEmail: \t$email\r\nPhone: \t$phone\r\n\r\n";
$message .= $_POST['message'];

$delivered = mail($to, $subject, $message, $headers);

if ($delivered) {
	header('Location: thanks.html');
}
else {
	echo "Message undelivered correctly";
}

?>