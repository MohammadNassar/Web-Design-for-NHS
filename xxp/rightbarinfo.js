
var mon = "<tr><td>Mon:</td><td>8:30am - 8pm</td></tr>";
var tues = "<tr><td>Tues:</td><td>8:30am - 8pm</td></tr>";
var wed = "<tr><td>Wed:</td><td>8:30am - 8pm</td></tr>";
var thur = "<tr><td>Thur:</td><td>8:30am - 8pm</td></tr>";
var fri = "<tr><td>Fri:</td><td>8:30am- 6:30pm</td></tr>";
var sat = "<tr><td>Sat:</td><td>CLOSED</td></tr>";
var sun = "<tr><td>Sun:</td><td>CLOSED</td></tr>";
var openingtimes = "<b>Opening Times:</b><table>"+mon+tues+wed+thur+fri+sat+sun+"</table></br></br>";
var contactinfo = "<b>Tel:</b> 0844 815 1020 </br><b>Fax:</b>  0844 815 1021</br></br><b>Emergency Tel / </br><i>out of hours service:</b></i></br></br>020 7377 7151";

function display(){
	var time = new Date();
		var timenow = time.toLocaleTimeString();
	document.getElementById('times').innerHTML = timenow + "<br /><br />" + openingtimes + contactinfo;}

display();
setInterval("display();", 1000);

