
var mon = "<tr><td>Mon:</td><td>8am - 8pm</td></tr>";
var tues = "<tr><td>Tues:</td><td>8am - 8pm</td></tr>";
var wed = "<tr><td>Wed:</td><td>8am - 8pm</td></tr>";
var thur = "<tr><td>Thur:</td><td>8am - 8pm</td></tr>";
var fri = "<tr><td>Fri:</td><td>8am - 8pm</td></tr>";
var sat = "<tr><td>Sat:</td><td>8am - 8pm</td></tr>";
var sun = "<tr><td>Sun:</td><td>8am - 8pm</td></tr>";
var openingtimes = "<b>Opening Times:</b><table style='margin:10px'>"+mon+tues+wed+thur+fri+sat+sun+"</table></br></br>";
var contactinfo = "<b>Tel:</b> 020 8980 1888</br></br><b>Emergency Tel / </br><i>out of hours service:</b></i></br></br>020 7377 7151";

function display(){
	var time = new Date();
		var timenow = time.toLocaleTimeString();
	document.getElementById('times').innerHTML = timenow + "<br /><br />" + openingtimes + contactinfo;}

display();
setInterval("display();", 1000);

