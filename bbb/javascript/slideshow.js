
//setTimeout(function() {alert("Hi")}, 2000);

var text = new Array();
var link = new Array();

text[1] = "Welcome to the Bromley by Bow Health Centre";
text[2] = "Bromley by Bow Entrance gate";
text[3] = "Bromley by Bow gardens";
text[4] = "Reception Area";
text[5] = "Garden Party";
text[6] = "Garden Party";

link[1] = "#";
link[2] = "#";
link[3] = "#";
link[4] = "#";
link[5] = "#";
link[6] = "#";

var min = 1;
var max = 6;
var slidenumber = 0;
var milliseconds = 4000;
var timer;

sliding();
function sliding() {
	setTimeout(function(){
	document.getElementById('slideimage').src = "images/slide"+ slidenumber +".png";
	document.getElementById('slideshowtext').innerHTML = text[slidenumber];
	document.getElementById('slideshowlink').href = link[slidenumber];}, 1);
	if (slidenumber < max && slidenumber >= min-1){slidenumber++; stop();}
	else if (slidenumber < min-1){slidenumber = max;}
	else {slidenumber = min;}
	timer = setTimeout("sliding()", milliseconds);
}

function select(num) {
		stop(); slidenumber = num-1; sliding();
	}

function stop(){clearTimeout(timer);}
function next(){stop(); sliding();}
function prev(){stop(); slidenumber = slidenumber-2; sliding();}

