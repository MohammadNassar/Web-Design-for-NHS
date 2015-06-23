<?php

//$to = "m.nassar@se12.qmul.ac.uk";
$to = "safeermohammed13190@yahoo.co.uk";
$subject = "Email Subject";
$message = "Hi";
$headers = "From: email@bbbhp.co.uk"."\r\n";

$name = $_POST['name'];
$email = $_POST['email'];
$phone = $_POST['phone'];
//$message = $_POST['message'];

$delivered = mail($to, $subject, $message, $headers);

/*echo "$name<br>";
echo "$email<br>";
echo "$phone<br>";
echo "$message<br>";*/

if ($delivered) {
	echo "Message was sent successfully.";
}
else {
	echo "Message undelivered correctly";
}

?>