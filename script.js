$(document).ready(function(){
	//declare functions
	var sleep = function (miliseconds) {
		var currentTime = new Date().getTime();
		while (currentTime + miliseconds >= new Date().getTime()) {}
	}
	
	var displayTime = function() {
		var d = new Date(); //does at t=0ms
		document.getElementById("clock").innerHTML = d.toLocaleTimeString();
		
		setInterval(function(){ //does every 1000ms after that
			var d = new Date();
			document.getElementById("clock").innerHTML = d.toLocaleTimeString();
		}, 1000);
	}
	
	
	//begin main section
	setup();
	displayTime();
});
