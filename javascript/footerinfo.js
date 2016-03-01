
var logoinfo = new Array();

logoinfo['patients'] = "Patient - Trusted medical information and support";
logoinfo['cqc'] = "Care Quality Commission - Checker of national standards of care services";
logoinfo['nhschoices'] = "NHS Choices - Your health, your choices";
logoinfo['nhsdirect'] = "NHS Direct - Delivering multichannel health services for patients";
logoinfo['depofhealth'] = "Department of Health - Helping people to live better";
logoinfo['nhs111'] = "NHS 111 Service - Call 111 when it's less urgent than 999";
logoinfo['netdoctor'] = "NetDoctor - Presenting medical information in a clear and understandable language";
logoinfo['bartshealth'] = "Barts Health - Providing care services where it is needed most";
logoinfo['nhsengland'] = "NHS England - High quality care for all, now and for future generations";

function showFooterInfo(name){
	document.getElementById('footerinfo').innerHTML = logoinfo[name];
	}

function hideFooterInfo() {
	document.getElementById('footerinfo').innerHTML = "";
	}

