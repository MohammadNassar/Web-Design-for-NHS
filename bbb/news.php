<?xml version = "1.0" encoding = "utf-8"?>
<!DOCTYPE html PUBLIC "-//W3C//DTD XHTML 1.0 Transitional//EN" "http://www.w3.org/TR/xhtml1/DTD/xhtml1-transitional.dtd">
<html xmlns = "http://www.w3.org/1999/xhtml">
	<head>
		<title>News - Bromley by Bow Health Centre</title>
		<link type="text/css" href="style-default.css" rel="stylesheet"></link>
	</head>
	<body>
		<div id="holder">
		
			<div id="header">
				<div class="title1"> </div>
				<div class="title2"> </div>
				<div class="logo"> <a href="../index.html"> <img src="images/logo.png" width="100" height="100" alt="Logo2" border="none" /> </a> </div>
				<div class="nhslogo"> <img src="images/nhs.png" width="120" height="50" alt="Logo3" /> </div>
			</div> <!-- Close header div -->
			
			<div id="topbar">
				<div class="topnav">
					<ul>
						<li><a href="home.html">Home</a>
							<ul>
								<a href="../index.html"><li>Main Page</li></a>
								<a href="../bbb/home.html"><li>Bromley by Bow</li></a>
								<a href="../standrews/home.html"><li>St. Andrew's</li></a>
								<a href="../xxp/home.html"><li>XX Place</li></a>
								<a href="../healthchoices/home.html"><li>Health Advice</li></a>
							</ul>
						</li>
						<li><a href="appointandpresc.html">Appointments & Prescriptions</a>
							<ul>
								<a href="appointments.html"><li>Book an Appointment</li></a>
								<a href="prescriptions.html"><li>Prescriptions</li></a>
							</ul>
						</li>
						<li><a href="onlineaccess.html">Online Access</a>
							<ul>
								<a href="howitworks.html"><li>How It Works</li></a>
								<a href="appointmentsonline.html"><li>Book an Appointment</li></a>
								<a href="prescriptionsonline.html"><li>Prescriptions</li></a>
								<a href="registrations.html"><li>Registrations</li></a>
							</ul>
						</li>
						<li><a href="patientfirst.html">Patient First</a>
							<ul>
								<a href="patientgroup.html"><li>Patient Participation Group</li></a>
								<a href="patientcharter.html"><li>Patient Charter</li></a>
								<a href="complaints.html"><li>Complaints Procedure</li></a>
								<a href="towerhamletshealthwatch.html"><li>Tower Hamlets Health Watch</li></a>
							</ul>
						</li>
						<li><a href="noticeboard.html">Notice Board</a>
							<ul>
								<a href="news.html"><li>News</li></a>
								<a href="events.html"><li>Events</li></a>
							</ul>
						</li>
					</ul>
				</div> <!-- Close topnav div -->
			</div> <!-- Close topbar div -->
			
			<div id="bodyholder">
			
				<div id="leftbar">
					<div class="leftnav">
						<a href="about.html"> <div class="aboutus"> </div> </a>
						<a href="contact.html"> <div class="contactus"> </div> </a>
						<a href="findus.html"> <div class="findus"> </div> </a>
						<a href="services.html"> <div class="services"> </div> </a>
						<a href="staff.html"> <div class="staff"> </div> </a>
						<br />
					</div> <!-- Close leftnav div -->
				</div> <!-- Close leftbar div -->
			
				<div id="content">
									<div class="directory"> <a href="home.html">Home</a> <div class="arrow"></div> <a href="noticeboard.html">News</a> <div class="arrow"></div> News <span style="float:right;font-weight:bold;"><a href="staffaccess.html">Update</a></span></div> <!-- Close directory div -->
									
					<?php
						$filename = 'news.txt';
						if (file_exists($filename)){
							$readfile = fopen($filename, 'r');
							$show = fread($readfile, filesize($filename)+1);
							fclose($readfile);}
						else{$show = "No Information Added!!";}
						echo "$show";
					?>
								
				</div> <!-- Close content div -->
				
				<div id="rightbar">
					
					<div id="times">
						<script src="rightbarinfo.js"></script>
					</div>
					
				</div> <!-- Close rightbar div -->
				
			</div> <!-- Close bodyholder div -->
			
			<div id="footer">
				<div id="footerlinks">
					<a href="../index.html"> Main Partnership Page </a>
					<a href="about.html"> About Us </a>
					<a href="contact.html"> Contact Us </a>
					<a href="services.html"> Services </a>
					<a href="../careers.html"> Careers </a>
				</div>
				
				<a href="http://www.patient.co.uk/">
					<div class="logo-patients" onMouseOver="showFooterInfo('patients');" onMouseOut="hideFooterInfo();"> </div>
				</a>
				<a href="http://www.cqc.org.uk/">
					<div class="logo-cqc" onMouseOver="showFooterInfo('cqc');" onMouseOut="hideFooterInfo();"> </div>
				</a>
				<a href="http://www.nhs.uk/Pages/HomePage.aspx">
					<div class="logo-nhschoices" onMouseOver="showFooterInfo('nhschoices');" onMouseOut="hideFooterInfo();"> </div>
				</a>
				<a href="http://www.nhsdirect.nhs.uk/">
					<div class="logo-nhsdirect" onMouseOver="showFooterInfo('nhsdirect');" onMouseOut="hideFooterInfo();"> </div>
				</a>
				<a href="https://www.gov.uk/government/organisations/department-of-health">
					<div class="logo-depofhealth" onMouseOver="showFooterInfo('depofhealth');" onMouseOut="hideFooterInfo();"> </div>
				</a>
				<a href="http://www.nhs.uk/NHSEngland/AboutNHSservices/Emergencyandurgentcareservices/Pages/NHS-111.aspx">
					<div class="logo-nhs111" onMouseOver="showFooterInfo('nhs111');" onMouseOut="hideFooterInfo();"> </div>
				</a>
				<a href="http://www.netdoctor.co.uk/">
					<div class="logo-netdoctor" onMouseOver="showFooterInfo('netdoctor');" onMouseOut="hideFooterInfo();"> </div>
				</a>
				<a href="http://www.bartshealth.nhs.uk/">
					<div class="logo-bartshealth" onMouseOver="showFooterInfo('bartshealth');" onMouseOut="hideFooterInfo();"> </div>
				</a>
				<a href="http://www.england.nhs.uk/">
					<div class="logo-nhsengland" onMouseOver="showFooterInfo('nhsengland');" onMouseOut="hideFooterInfo();"> </div>
				</a>
				
				<br /><br />
				
				<div id="footerinfo">
					<script src="footerinfo.js"></script>
				</div>
				
				<p>&copy; Bromley by Bow Health Partnership</p>
			</div> <!-- Close footer div -->
			
		</div> <!-- Close holder div -->
		
	</body>
</html>