
<!DOCTYPE html PUBLIC "-//W3C//DTD XHTML 1.0 Transitional//EN" "http://www.w3.org/TR/xhtml1/DTD/xhtml1-transitional.dtd">
<html xmlns = "http://www.w3.org/1999/xhtml">
	<head>
		<title>Welcome to the Bromley by Bow Health Partnership</title>
		<link type="text/css" href="style-index.css" rel="stylesheet"></link>
		
		<script type="text/javascript">
			var image = new Array();
			var link = new Array();
			var text = new Array();
			
			image['bbb'] = "images/slideimage3.png";
			image['sa'] = "images/slideimage1.png";
			image['xxp'] = "images/slideimage2.png";
			image['ha'] = "images/slideimage4.png";
			welcomeimage = "images/circle.png";
			
			link['bbb'] = "bbb/home.html";
			link['sa'] = "sa/home.html";
			link['xxp'] = "xxp/home.html";
			link['ha'] = "ha/home.html";
			
			var titlestyle = "<span style='color:blue;font-size:15pt;'>";
			
			text['about'] = titlestyle+"<b>About Us</b></span><br><br>Info about About us<br><a href='about.html'>Click Here</a>";
			text['contact'] = titlestyle+"<b>Contact Us</b></span><br><b>Bromley by Bow Health Centre</b><br><b>Telephone:</b> 0844 815 1020<br><b>Fax:</b> 020 8983 4098<br><br><b>St Andrew's Health Centre</b><br><b>Telephone:</b> 020 8980 1888<br><b>Fax:</b> 020 89802753<br><br><b>XX Place</b><br><b>Telephone:</b> 08448151020<br><b>Fax:</b> 020 7702 7024<br><br>";
			text['emergency'] = titlestyle+"<b>Emergency Care</b></span><br>If you need urgent advice, ring the put-of-hours service on <br><b>020 7377 7151</b>.<br>You may wish to contact NHS Direct either by phone on <b>0845 4647</b> or online at <a href='http://www.nhsdirect.nhs.uk'>www.nhsdirect.nhs.uk</a> .<br>If an <u>ambulance is needed</u>, call 999, the emergency phone number in the UK. You can also dial 112, which is the ambulance number throughout the European Union.";
			text['careers'] = titlestyle+"<b>Careers</b></span><br><br><br><br>Brief information on careers<br>To find out about careers <a href='careers.html'>CLICK HERE</a>";
			
			function slide(index) {
				document.getElementById("slideimage").src = image[index];
				document.getElementById("slideimagelink").style.visibility = "visible";
				document.getElementById("slideimagelink").innerHTML = "<a href='" + link[index] + "'><div style='width:100%;height:100%;'></div></a>";
				document.getElementById("text").innerHTML = "";
			}
			
			function showinfo(element) {
				document.getElementById("slideimage").src = "images/circletext.png";
				document.getElementById("slideimagelink").style.visibility = "hidden";
				document.getElementById("text").innerHTML = text[element];
			}
			
			function mouseout() {
				//document.getElementById("slideimage").src = welcomeimage;
				//document.getElementById("slideimagelink").style.visibility = "hidden";
				//document.getElementById("text").innerHTML = "";
			}
		</script>
		
	</head>
	<body>
		<div id="outerholder">
		
			<div class="title1"><img src="images/title-all.png" width="540" height="45" alt="Logo2" /></div>
			<div class="logo"><img src="images/logo.png" width="100" height="100" alt="Logo2" /></div>
			<div class="nhslogo"><img src="images/nhs.png" width="120" height="50" alt="Logo3" /></div>
			
			<div id="loader"></div>
			
			<div id="topimage">
				<div id="slideimageholder">
					 <img id="slideimage" src="images/circle.png" />
					 <div id="text"></div>
					 <div id="slideimagelink"></div>
					 
					 <div id="sidelinks">
						<div id="about" onMouseOver="showinfo('about');">About us</div>
						<div id="contact" onMouseOver="showinfo('contact');">Contact us</div>
						<div id="emergency" onMouseOver="showinfo('emergency');">Emergency Care</div>
						<div id="careers" onMouseOver="showinfo('careers');">Careers</div>
					</div>
					
				</div> <!-- Close slideimageholder div -->
				
				<a href="bbb/home.html">
					<div id="bbb" onMouseOver="slide('bbb');" onMouseOut="mouseout();">
					</div> <!-- Close bbb div -->
				</a>
				
				<a href="sa/home.html">
					<div id="sa" onMouseOver="slide('sa');" onMouseOut="mouseout();">
					</div> <!-- Close sa div -->
				</a>
				
				<a href="xxp/home.html">
					<div id="xxp" onMouseOver="slide('xxp');" onMouseOut="mouseout();">
					</div> <!-- Close xxp div -->
				</a>
				
				<a href="ha/home.html">
					<div id="ha" onMouseOver="slide('ha');" onMouseOut="mouseout();">
					</div> <!-- Close ha div -->
				</a>
				
			</div> <!-- Close topimage div -->
			
			<div id="news">
				 <center><span style="color:brown;font-weight:bold;font-size:1.2em;">News</span></center><br />
				 
				<marquee behavior="scroll" direction="up" scrollamount="2" scrolldelay="" onMouseOver="this.stop();" onMouseOut="this.start();">
					<center><a href="bbb/news.php"><font color="#3A4E91"><b><u>Bromley By Bow Health Centre News</u></b></font></a></center><br />
					<?php
						$filename = 'bbb/news.txt';
						if (file_exists($filename)){
							if (filesize($filename) == 0) {
								$show = "No News currently for the Bromley By Bow Health Centre!!";}
							else {
								$readfile = fopen($filename, 'r');
								$show = fread($readfile, filesize($filename));
								fclose($readfile);}
							}
						else {$show = "No News currently for the Bromley By Bow Health Centre!!";}
						echo "$show";
					?>
					<br /><br /><hr><br />
					
					<center><a href="sa/news.php"><font color="#6B21C6"><b><u>St Andrew's Health Centre News</u></b></font></a></center><br />
					<?php
						$filename = 'sa/news.txt';
						if (file_exists($filename)){
							if (filesize($filename) == 0) {
								$show = "No News currently for the St Andrew's Health Centre!!";}
							else {
								$readfile = fopen($filename, 'r');
								$show = fread($readfile, filesize($filename));
								fclose($readfile);}
							}
						else {$show = "No News currently for the St Andrew's Health Centre!!";}
						echo "$show";
					?>
					<br /><br /><hr><br />
					
					<center><a href="xxp/news.php"><font color="#EC018C"><b><u>XX Place News</u></b></font></a></center><br />
					<?php
						$filename = 'xxp/news.txt';
						if (file_exists($filename)){
							if (filesize($filename) == 0) {
								$show = "No News currently for the XX Place Surgery!!";}
							else {
								$readfile = fopen($filename, 'r');
								$show = fread($readfile, filesize($filename));
								fclose($readfile);}
							}
						else {$show = "No News currently for the XX Place Surgery!!";}
						echo "$show";
					?>
					<br /><br /><hr>
				</marquee>
			</div> <!-- Close news div -->
			
		</div> <!-- Close outerholder div -->
		
	</body>
</html>