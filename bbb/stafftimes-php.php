<?php

$name = $_POST['name'];

$allinfo 	= "<table id='stafftimesview' cellspacing='5'>\n";

$weekday 	= array("", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday", "Sunday");

	for ($i = 1; $i<=7; $i++) {
		if ($i %2==1) {$shade = "style='background-color:#eeeeee;'";} else {$shade = "";}
		
		if ($_POST[$i] == 'in') {
			$allinfo.="<tr ".$shade."><td width='30%' align='center'><b> ".$weekday[$i]." </b></td><td align='center'>".$_POST[$i+7]."</td></tr>\n";
		}
		else {
			$allinfo.="<tr ".$shade."><td width='30%' align='center'><b> ".$weekday[$i]." </b></td><td align='center'>"."Not In"."</td></tr>\n";
		}
	}

$allinfo .= "</table>";

$handler = fopen($name.'.txt', 'w');
fwrite($handler, $allinfo);
fclose($handler);

header('Location: stafftimesview.php');

//$readfile='shaha.txt'; $lines = file($readfile); echo "$lines[0]";
//$monday = $_POST[1]; $tuesday = $_POST[2]; $wednesday = $_POST[3]; $thursday = $_POST[4]; $friday = $_POST[5]; $saturday = $_POST[6]; $sunday = $_POST[7];
//$montimes = $_POST[8]; $tuestimes = $_POST[9]; $wedtimes = $_POST[10]; $thurtimes = $_POST[11]; $fritimes = $_POST[12]; $sattimes = $_POST[13]; $suntimes = $_POST[14];

?>