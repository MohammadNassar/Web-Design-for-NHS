
var postisin = "Yes, you would be able to register at our surgery.";
var postisnotin = "We are sorry to say that you would not be able to register at our surgery, as you do not live within our catchment area.";
function checkarea() {
	var postcode = document.getElementById('name').value;
	if (postcode == '') {
		document.getElementById('postcodeapproval').innerHTML = '';
		alert('Please enter a post code in the text box !!');
	}
	else {
		switch (postcode) {
			case 'e3 eff': document.getElementById('postcodeapproval').innerHTML = postisin; break;
			case 'e5 eff': document.getElementById('postcodeapproval').innerHTML = postisnotin; break;
			default: document.getElementById('postcodeapproval').innerHTML = postisnotin; break;
		}
	}
}

