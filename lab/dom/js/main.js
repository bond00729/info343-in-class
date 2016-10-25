"use strict";

var boxOne = document.getElementById('one'),
	boxTwo = document.getElementById('two'),
	boxThree = document.getElementById('three'),
	boxFour = document.getElementById('four'),
	boxFive = document.getElementById('five'),
	boxSix = document.getElementById('six');

boxOne.addEventListener("click", function() {
    //console.log("clicked boxOne");
	boxOne.classList.add("fade-to-black");
})

boxTwo.addEventListener("click", function() {
	boxTwo.classList.add("fall");
})

boxThree.addEventListener("mouseover", function() {
	boxThree.classList.add("fade-to-white");
})

boxFour.addEventListener("click", function() {
	if (boxFour.classList.contains("fall")) {
		boxFour.classList.remove("fall");
		boxFour.classList.add("float");
	} else {
		boxFour.classList.remove("float");
		boxFour.classList.add("fall");
	}
})