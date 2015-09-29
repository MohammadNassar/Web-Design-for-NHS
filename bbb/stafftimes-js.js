
var element = new Array();
var usernamekey = new Array();
var passwordkey = new Array();

//usernamekey[0] = "";
//passwordkey[0] = "";

usernamekey[1] = "";
passwordkey[1] = "";

usernamekey[2] = "";
passwordkey[2] = "";

usernamekey[3] = "";
passwordkey[3] = "";

var counter = 0;

function checker() {
	for(var i=0; i<usernamekey.length; i++) {
		if (document.getElementById('name').value == "" || document.getElementById('password').value == "") {
			alert('Please fill the missing box(s)'); break;
		}
		else {
			if (document.getElementById('name').value == usernamekey[i] && document.getElementById('password').value == passwordkey[i]) {
			document.getElementById('validation').style.visibility = "hidden";
			document.getElementById('stafftimestable').style.visibility = "visible";
			break;
			}
			else {counter++;}
		}
	}
	if (counter == usernamekey.length) {
		alert('Username or Password is incorrect !!');
		counter = 0;
	}
}

var from = "<select name='from'><option value='' disabled selected style='display: none;'>Select...</option><option value='in'>In</option><option value='notin'>Not In</option></select>";
var to = "<select name='to'><option value='' disabled selected style='display: none;'>Select...</option><option value='in'>In</option><option value='notin'>Not In</option></select>";
var instruction = "<span style='font-size: 10.5pt;color:red;'>State your availability:</span>";
var timeskeypress = "onkeypress='return nosubmit(event); function nosubmit(e){if(e.keyCode == 13){return false;}};'"

element['mon']  = instruction + " <input type='text' name='8' id='8' "  + timeskeypress + " />";
element['tues'] = instruction + " <input type='text' name='9' id='9' " + timeskeypress + " />";
element['wed']  = instruction + " <input type='text' name='10' id='10' "  + timeskeypress + " />";
element['thur'] = instruction + " <input type='text' name='11' id='11' " + timeskeypress + " />";
element['fri']  = instruction + " <input type='text' name='12' id='12' "  + timeskeypress + " />";
element['sat']  = instruction + " <input type='text' name='13' id='13' "  + timeskeypress + " />";
element['sun']  = instruction + " <input type='text' name='14' id='14' "  + timeskeypress + " />";

function showtimes(id){
	document.getElementById(id).innerHTML = element[id];
}
function hidetimes(id) {
	document.getElementById(id).innerHTML = "";
}

function hideall() {
	document.getElementById('mon').innerHTML  = "";
	document.getElementById('tues').innerHTML = "";
	document.getElementById('wed').innerHTML  = "";
	document.getElementById('thur').innerHTML = "";
	document.getElementById('fri').innerHTML  = "";
	document.getElementById('sat').innerHTML  = "";
	document.getElementById('sun').innerHTML  = "";
}

function runScript(e) {
	if (e.keyCode == 13) {
		checker();
		return false;
	}
}

/*Function below to be fixed and enhanced!!*/
function checkfields() {
	var submit = true;
	if (document.getElementById('8').value == "") {document.getElementById('warnings').iinnerHTML = "Please fill in the box..."; submit =false;}
	if (document.getElementById('9').value == "") {document.getElementById('warnings').iinnerHTML = "Please fill in the box..."; submit =false;}
	if (document.getElementById('10').value == "") {document.getElementById('warnings').iinnerHTML = "Please fill in the box..."; submit =false;}
	if (document.getElementById('11').value == "") {document.getElementById('warnings').iinnerHTML = "Please fill in the box..."; submit =false;}
	if (document.getElementById('12').value == "") {document.getElementById('warnings').iinnerHTML = "Please fill in the box..."; submit =false;}
	if (document.getElementById('13').value == "") {document.getElementById('warnings').iinnerHTML = "Please fill in the box..."; submit =false;}
	if (document.getElementById('14').value == "") {document.getElementById('warnings').iinnerHTML = "Please fill in the box..."; submit =false;}
	
	return submit;
}

