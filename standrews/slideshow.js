
//setTimeout(function() {alert("Hi")}, 2000);

var text1 = "Slide One Info";
var text2 = "Slide Two Info";
var text3 = "Slide Three Info";
var text4 = "Slide Four Info";
var text5 = "Slide Five Info";
var text6 = "Slide Six Info";
var textnow;
var link1 = "#";
var link2 = "#";
var link3 = "#";
var link4 = "#";
var link5 = "#";
var link6 = "#";
var linknow;
var min = 1;
var max = 6;
var slidenumber = 0;
var timer;

function text(){
	switch (slidenumber){
	case 1: textnow = text1; break;
	case 2: textnow = text2; break;
	case 3: textnow = text3; break;
	case 4: textnow = text4; break;
	case 5: textnow = text5; break;
	case 6: textnow = text6; break;}
}

function link(){
	switch (slidenumber) {
	case 1: linknow = link1; break;
	case 2: linknow = link2; break;
	case 3: linknow = link3; break;
	case 4: linknow = link4; break;
	case 5: linknow = link5; break;
	case 6: linknow = link6; break;}
}

sliding();
function sliding() {
	setTimeout(function(){
	document.getElementById('slideimage').src="images/slide"+ slidenumber +".png"; text(); link();
	document.getElementById('slideshowtext').innerHTML=(textnow);
	document.getElementById('slideshowlink').href=linknow;}, 1);
	if (slidenumber < max && slidenumber >= min-1){slidenumber++; stop();}
	else if (slidenumber < min-1){slidenumber = max;}
	else {slidenumber = min;}
	timer = setTimeout("sliding()", 4000);
}

function select(num) {
	if (num == "num1") {
		stop();slidenumber=0; sliding();}
	if (num == "num2") {
		stop();slidenumber=1; sliding();}
	if (num == "num3") {
		stop();slidenumber=2; sliding();}
	if (num == "num4") {
		stop();slidenumber=3; sliding();}
	if (num == "num5") {
		stop();slidenumber=4; sliding();}
	if (num == "num6") {
		stop();slidenumber=5; sliding();}
	}

function stop(){clearTimeout(timer);}
function next(){stop(); sliding();}
function prev(){stop(); slidenumber=slidenumber-2; sliding();}

