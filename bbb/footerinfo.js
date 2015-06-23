
var logoinfo = new Array();

logoinfo['patients'] = "patients Info";
logoinfo['cqc'] = "cqc Info";
logoinfo['nhschoices'] = "nhschoices Info";
logoinfo['nhsdirect'] = "nhsdirect Info";
logoinfo['depofhealth'] = "depofhealth Info";
logoinfo['nhs111'] = "nhs111 Info";
logoinfo['netdoctor'] = "netdoctor Info";
logoinfo['bartshealth'] = "bartshealth Info";
logoinfo['nhsengland'] = "nhsengland Info";

function showFooterInfo(name){
	document.getElementById('footerinfo').innerHTML = logoinfo[name];
	}

function hideFooterInfo() {
	document.getElementById('footerinfo').innerHTML = "";
	}

