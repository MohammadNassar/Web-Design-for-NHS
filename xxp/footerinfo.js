
var patients = "patients Info";
var cqc = "cqc Info";
var nhschoices = "nhschoices Info";
var nhsdirect = "nhsdirect Info";
var depofhealth = "depofhealth Info";
var nhs111 = "nhs111 Info";
var netdoctor = "netdoctor Info";
var bartshealth = "bartshealth Info";
var nhsengland = "nhsengland Info";
var mainInfo;

function showFooterInfo(elemName){
	switch (elemName) {
		case "patients" : mainInfo = patients; break;
		case "cqc" : mainInfo = cqc; break;
		case "nhschoices" : mainInfo = nhschoices; break;
		case "nhsdirect" : mainInfo = nhsdirect; break;
		case "depofhealth" : mainInfo = depofhealth; break;
		case "nhs111" : mainInfo = nhs111; break;
		case "netdoctor" : mainInfo = netdoctor; break;
		case "bartshealth" : mainInfo = bartshealth; break;
		case "nhsengland" : mainInfo = nhsengland; break;
	}
	document.getElementById('footerinfo').innerHTML = mainInfo;
	}

function hideFooterInfo() {
	document.getElementById('footerinfo').innerHTML = "";
	}

