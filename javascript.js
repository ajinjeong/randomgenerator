let headingElement = document.getElementById("prompt");
let executeButtonElement = document.getElementById("executeButton");
let answerElement = document.getElementById("answer");
let questionElement = document.getElementById("question");

let answers = ["yes", "no", "maybe", "perchance", "mayhaps", "definitely", "NO", "nonononono", "of course", "absolutely", "absolutely not", "um IDK", "ask again"];

executeButton.addEventListener("click", function(){
	generate();
	restyle();
});

function generate(question){
	var randomanswer = answers[Math.floor(Math.random() * answers.length)];
	document.getElementById("answer").innerText = "The answer is: " + randomanswer
};

function restyle(answer) {
	var randomRed = Math.random() * 225;
	var randomGreen = Math.random() * 225;
	var randomBlue = Math.random() * 225;
	var outputcolorstring = "rgb(" + randomRed + "," + randomGreen + "," + randomBlue + ")";
	answerElement.style.color = outputcolorstring;
	
	let fontsize = ["8px", "12px", "20px", "32px", "40px", "50px"];
	var randomsize = fontsize[Math.floor(Math.random() * fontsize.length)];
	answerElement.style.fontSize = randomsize;

	let fonttype = ["serif", "sans-serif", "monospace", "cursive", "fantasy"];
	var randomfont = fonttype[Math.floor(Math.random() * fonttype.length)];
	answerElement.style.fontFamily = randomfont;
}