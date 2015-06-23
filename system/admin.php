<?php

session_start();

if ($_SESSION['admin']) {
	echo "Here is your admin page."."<br><a href='logout.php'>Log Out</a>";
}
else {
	header('Location: login.php');
}

?>