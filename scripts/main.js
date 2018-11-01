var sectionShown = [false, false, false, false, false];

var markersOW = [];
var markersOneTwo = [];
var markersThreeFour = [];
var markersFiveSix = [];
var markersSevenEight = [];
var markersNine = [];

function justLoaded(){
	hideAll();
	drawMarkers();
}
function hideAll(){
	for (i = 0; i < 6; i++){
		sectionShown[i] = false;		
	}
	overworld.style.display = "none";
	onetwo.style.display = "none";
	threefour.style.display = "none";
	fivesix.style.display = "none";
	seveneight.style.display = "none";
	nine.style.display = "none";
}

function showSection(m) {
	if (!sectionShown[m]){
		hideAll();
		sectionShown[m] = true;
		switch(m){
			case 0: 
				overworld.style.display = "block";
				break;
			case 1:
				onetwo.style.display = "block";
				break;
			case 2:
				threefour.style.display = "block";
				break;
			case 3:
				fivesix.style.display = "block";
				break;
			case 4:
				seveneight.style.display = "block";
				break;
			case 5:
				nine.style.display = "block";
				break;			
		}
	}
}

function toggleMarker(event) {
    var clicked = document.getElementById(this.id);
	if (clicked.getAttribute("src") == "images/marker1.png"){
		clicked.setAttribute("src", "images/marker2.png");
	}
	else if(clicked.getAttribute("src") == "images/marker2.png"){
		clicked.setAttribute("src", "images/marker3.png");
	}
	else{
		clicked.setAttribute("src", "images/marker1.png");
	}
}

function makeMarked(target){
	target.style.outline = "#000000 solid 0px";
	target.setAttribute("src", "images/marker0.png");
	target.setAttribute("onclick", "null");
}

function makeBlank(target){
	target.style.outline = "#000000 solid 0px";
	target.setAttribute("onclick", "null");
}

function showTooltip(event){
	var id = document.getElementById("tt");
	var clicked = document.getElementById(this.id);
	id.style.display = "block";
	id.innerHTML = clicked.id;
	id.style.top = "20px";
	id.style.left = "20px";
}

function hideTooltip(){
	document.getElementById("tt").style.display = "none";
}
function changeBG(){
	document.body.style.backgroundColor = document.getElementById("bgcolor").value;
}