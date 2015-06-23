<?php

session_start();

$username = $_POST['username'];
$password = $_POST['password'];

$usernamekey = array();
$passwordkey = array();

// If form is submitted with all needed data
if ($username && $password) {
	if ($username=="admin" && $password=="pass") {
		$_SESSION['admin'] = $username;
		header('Location: '.$username.'.php');
	}
	else {
		die("Incorrect Username or Password !!");
	}
}
else {
	header('Location: login.php');
}

?>