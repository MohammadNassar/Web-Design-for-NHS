<?php
session_start();
if (isset($_SESSION['admin'])) {
	echo "You are logged in.";
	exit();
}
?>

<html>
<body>

<form action="do-login.php" method="post">

Username:
<input type="text" name="username" /> <br />

Password:
<input type="text" name="password" /> <br />

<input type="submit" name="submit" value="Login" /><br />

</form>

</body>
</html>