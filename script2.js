function buttonFunction() {
	slogan = document.getElementById("slogan").value;
	sales = document.getElementById("sale").value;
	score = 0
	
	if (slogan.toLowerCase() == ("think different" || "think different but not too different")) {
		score = score + 1;
		console.log("hey1")
	}
	
	if (sales.toLowerCase() == ("apple 2" || "aplle ii")) {
		score = score + 1;
		console.log("hey")
	}
	
	if (document.getElementById("rad1").checked) {
		score = score + 1;
	}	
	else if (document.getElementById("rad2").checked) {
		score = score + 0;
	}
	else if (document.getElementById("rad3").checked) {
		score = score + 0;
	}
	
	if ( !(document.getElementById("timC").checked) && ((document.getElementById("steveW").checked) && (document.getElementById("steveJ").checked)))  {
		score = score + 2;
		console.log("hey")
	}
	else if (((document.getElementById("steveW").checked) || (document.getElementById("steveJ").checked)) && (!(document.getElementById("timC").checked) && ((document.getElementById("steveJ").checked) || (document.getElementById("steveW").checked)))) {
		score = score + 1;
		console.log("hello");
	}
	else {
		score = score + 0
	}
	
	if (score == 5) {
		document.getElementById("msg").innerHTML = " Message: you got perfect";
	}
	
	if (5 > score && score > 2) {
		document.getElementById("msg").innerHTML = "Message: you passed!";
	}
	
	if (score < 3) {
		document.getElementById("msg").innerHTML = "Message: you failed!!!!! oHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHH!!!!!!!!!!!!! LLLLL";
	}
	
	document.getElementById("Score").innerHTML = "Score:" + score + "/5";
	
	document.getElementById("Answers").innerHTML = "Answers: Apples slogan is 'think different', the 'apple 2' was the first to sell over a million units, apple was founded in '1976', and 'Steve Wozniak' and 'Steve Jobs' founded Apple."
}