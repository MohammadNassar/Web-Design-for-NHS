
var postisin = "Yes, you would be able to register at our surgery.";
var postisnotin = "We are sorry to say that you would not be able to register at our surgery, as you do not live within our catchment area.";

function checkarea() {
	var postcode = document.getElementById('postcode').value;
	if (postcode == '') {
		noinput();
	}
	else {
		findout(postcode);
	}
	document.getElementById('postcode').focus();
}

function correctpost() {
	document.getElementById('postcodeapproval').innerHTML = postisin;
	document.getElementById('highlight1').style.background = "palegreen";
	document.getElementById('highlight2').style.background = "palegreen";
	document.getElementById('resultimage').style.background = "url('images/post-correct.png')";
}

function wrongpost() {
	document.getElementById('postcodeapproval').innerHTML = postisnotin;
	document.getElementById('highlight1').style.background = "salmon";
	document.getElementById('highlight2').style.background = "salmon";
	document.getElementById('resultimage').style.background = "url('images/post-wrong.png')";
}

function noinput() {
	document.getElementById('postcodeapproval').innerHTML = "";
	document.getElementById('highlight1').style.background = "";
	document.getElementById('highlight2').style.background = "";
	document.getElementById('resultimage').style.background = "url('')";
	alert('Please enter a post code in the text box !!');
}

function findout(postcode) {
	switch (postcode) {
			case 'sa sa': correctpost(); break;
			case '': correctpost(); break;
			default: wrongpost(); break;
		}
}