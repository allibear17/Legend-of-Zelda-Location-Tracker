var sectionShown = [false, false, false, false, false];

var markersOW = [];
var markersOneTwo = [];
var markersThreeFour = [];
var markersFiveSix = [];
var markersSevenEight = [];
var markersNine = [];

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

function drawMarkers(){
	hideAll();
	//Overworld markers
	var place = document.getElementById("overworld");
	for (i = 0; i < 128; i++){
		markersOW[i] = document.createElement("img");
		markersOW[i].setAttribute("src", "images/marker1.png");
		markersOW[i].setAttribute("class", "owmarker");
		markersOW[i].id = "owmarker" + i;
		markersOW[i].style.left = (( i % 16 ) * 45 ) + 10 + 'px';
		markersOW[i].style.top = ( Math.trunc( i / 16 ) * 31 ) + 10 + 'px';
		markersOW[i].onclick = toggleMarker;
		place.appendChild(markersOW[i]);
	}
	
	//Markers for all dungeons
	for (i = 0; i < 96; i++){
		// Lvs one and two
		place = document.getElementById("onetwo");
		markersOneTwo[i] = document.createElement("img");
		markersOneTwo[i].setAttribute("src", "images/marker1.png");
		markersOneTwo[i].setAttribute("class", "lvmarker");
		markersOneTwo[i].id = "otmarker" + i;
		markersOneTwo[i].style.left = (( i % 12 ) * 60 ) + 10 + 'px';
		markersOneTwo[i].style.top = ( Math.trunc( i / 12 ) * 41.2 ) + 10 + 'px';
		markersOneTwo[i].onclick = toggleMarker;
		place.appendChild(markersOneTwo[i]);
		
		// Lvs three and four
		place = document.getElementById("threefour");
		markersThreeFour[i] = document.createElement("img");
		markersThreeFour[i].setAttribute("src", "images/marker1.png");
		markersThreeFour[i].setAttribute("class", "lvmarker");
		markersThreeFour[i].id = "tfmarker" + i;
		markersThreeFour[i].style.left = (( i % 12 ) * 60 ) + 10 + 'px';
		markersThreeFour[i].style.top = ( Math.trunc( i / 12 ) * 41.2 ) + 10 + 'px';
		markersThreeFour[i].onclick = toggleMarker;
		place.appendChild(markersThreeFour[i]);
		
		// Lvs five and six
		place = document.getElementById("fivesix");
		markersFiveSix[i] = document.createElement("img");
		markersFiveSix[i].setAttribute("src", "images/marker1.png");
		markersFiveSix[i].setAttribute("class", "lvmarker");
		markersFiveSix[i].id = "fsmarker" + i;
		markersFiveSix[i].style.left = (( i % 12 ) * 60 ) + 10 + 'px';
		markersFiveSix[i].style.top = ( Math.trunc( i / 12 ) * 41.2 ) + 10 + 'px';
		markersFiveSix[i].onclick = toggleMarker;
		place.appendChild(markersFiveSix[i]);
		
		// Lvs seven and eight
		place = document.getElementById("seveneight");
		markersSevenEight[i] = document.createElement("img");
		markersSevenEight[i].setAttribute("src", "images/marker1.png");
		markersSevenEight[i].setAttribute("class", "lvmarker");
		markersSevenEight[i].id = "semarker" + i;
		markersSevenEight[i].style.left = (( i % 12 ) * 60 ) + 10 + 'px';
		markersSevenEight[i].style.top = ( Math.trunc( i / 12 ) * 41.2 ) + 10 + 'px';
		markersSevenEight[i].onclick = toggleMarker;
		place.appendChild(markersSevenEight[i]);
		
		// Lv nine
		place = document.getElementById("nine");
		markersNine[i] = document.createElement("img");
		markersNine[i].setAttribute("src", "images/marker1.png");
		markersNine[i].setAttribute("class", "lvmarker");
		markersNine[i].id = "ninemarker" + i;
		markersNine[i].style.left = (( i % 12 ) * 60 ) + 10 + 'px';
		markersNine[i].style.top = ( Math.trunc( i / 12 ) * 41.2 ) + 10 + 'px';
		markersNine[i].onclick = toggleMarker;
		place.appendChild(markersNine[i]);
	}
}

function toggleMarker(event) {
    var clicked = document.getElementById(this.id);
	console.log(clicked);
	if (clicked.getAttribute("src") == "images/marker1.png"){
		clicked.setAttribute("src", "images/marker2.png");
	}
	else{
		clicked.setAttribute("src", "images/marker1.png");
	}
}

function changeBG(){
	document.body.style.backgroundColor = document.getElementById("bgcolor").value;
}