
var maininfo = "<strong>Opening Times:</strong><br /><br />Monday: 8.30am to 6.30pm</br>Tuesday: 8.30am to 7.30pm</br>Wednesday: 8.30am to 6.30pm</br>Thursday: 8.30am to 7.30pm</br>Friday: 8.30am to 6.30pm</br>Saturday: CLOSED</br>Sunday: CLOSED</br></br><strong>Tel:</strong> 020 8980 1888 <br /><strong>Fax:</strong>  020 8983 4098</br></br><strong>Emergency Tel / </br><i>out of hours service:</strong></i></br></br>020 7377 7151</br></br>";

function display(){
	var time = new Date();
		var timenow = time.toLocaleTimeString();
	document.getElementById('rightbar').innerHTML = timenow + "<br /><br />" + maininfo;}

display();
setInterval("display();", 1000);

