
var usernamekey = new Array();
var passwordkey = new Array();

usernamekey[0] = "";
passwordkey[0] = "";

var forminfo = "<input type='submit' value='Send' style='font-size: 12pt; font-weight: bold; width:80px;' />&nbsp;";
forminfo += "<input type='reset' value='Clear All' style='font-size: 12pt; font-weight: bold; width:80px;' onclick='clearform();' />";

var counter = 0;

function checker() {
	for(var i=0; i<usernamekey.length; i++) {
		if (document.getElementById('name').value == "" || document.getElementById('password').value == "") {
			alert('Please fill the missing box(s)'); break;
		}
		else {
			if (document.getElementById('name').value == usernamekey[i] && document.getElementById('password').value == passwordkey[i]) {
				document.getElementById('validation').style.visibility = "hidden";
				document.getElementById('textareatable').style.visibility = "visible";
				document.getElementById('formfield').innerHTML = forminfo;
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

function runScript(e) {
	if (e.keyCode == 13) {
		checker();
		return false;
	}
}

function clearform() {
	var check = confirm('Are you sure you want to clear the form?');
	if (check) {
	document.getElementById('textarea').innerHTML = "";}
}

