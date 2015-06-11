
var maininfo = "<strong>Opening Times:</strong><br />Monday: 8am to 8pm</br>Tuesday: 8am to 8pm </br>Wednesday: 8am to 8pm</br>Thursday: 8am to 8pm</br>Friday: 8am to 8pm</br>Saturday: CLOSED</br>Sunday: CLOSED</br></br><strong>Tel:</strong> 020 8980 1888 </br></br><strong>Emergency Tel / </br><i>out of hours service:</strong></i></br></br>020 7377 7151</br></br>";

function display(){
	var time = new Date();
		var timenow = time.toLocaleTimeString();
	document.getElementById('rightbar').innerHTML = timenow + "<br /><br />" + maininfo;}

display();
setInterval("display();", 1000);

