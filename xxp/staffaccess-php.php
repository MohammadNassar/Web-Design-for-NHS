<?php

$forminfo = $_POST['textarea'];

$allinfo = "";

if ($forminfo) {
	$allinfo .= $forminfo;
}

$handler = fopen('news.txt', 'w');
fwrite($handler, $allinfo);
fclose($handler);

header('Location: news.php');

?>