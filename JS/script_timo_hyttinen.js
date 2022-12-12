let startButton = document.getElementById("startButton");
let nextButton = document.getElementById("nextButton");
let questionDiv = document.getElementById("question");
let answerButton1 = document.getElementById("answer1");
let answerButton2 = document.getElementById("answer2");
let answerButton3 = document.getElementById("answer3");
let answerButton4 = document.getElementById("answer4");
let starOverButton = document.getElementById("soButton");

let questions = [
	{
	question: "Mikä on viides planeetta Auringosta?",
	answerA: "Mars",
	answerB: "Neptunus",
	answerC: "Jupiter",
	answerD: "Merkurius"
	},
	{
	question: "Ovatko sienet yleensä...",
	answerA: "Kuluttajia",
	answerB: "Hajottajia",
	answerC: "Tuottajia",
	answerD: "Rakentajia",
	},
	{
	question: "Mikä näistä linnuista on Suomen kansallislintu?",
	answerA: "Korppi",
	answerB: "Laulujoutsen",
	answerC: "Maakotka",
	answerD: "Sinirinta",
	},
	{
	question: "Miksi vuorovesi-ilmiö tapahtuu?",
	answerA: "Kuun ja Auringon painovoima ja Maan pyörimisliike aiheuttavat sen.",
	answerB: "Maan pyörimisliike aiheuttaa vuorovesi-ilmiön.",
	answerC: "Mannerlaattojen liike aiheuttaa merten liikkeen.",
	answerD: "Merivirtojen liike on niin suurta, että se aiheuttaa ilmiön",
	},
	{
	question: "Kuinka monta luuta ihmiskehossa on?",
	answerA: "314",
	answerB: "245",
	answerC: "180",
	answerD: "206",
	}
]

let counter = 0;
let rightAnswerCounter = 0;
let currentQuestion = 0;

startButton.addEventListener("click", function(){
	currentQuestion = 0;
	document.getElementById("divQuestion").classList.remove("disappear");
	document.getElementById("answerP").classList.remove("disappear");
	document.getElementById("nextButton").classList.remove("disappear");
	document.getElementById("soButton").classList.remove("disappear");
	document.getElementById("startButton").classList.add("disappear");
	questionDiv.textContent = questions[currentQuestion].question;
	answerButton1.textContent = questions[currentQuestion].answerA;
	answerButton2.textContent = questions[currentQuestion].answerB;
	answerButton3.textContent = questions[currentQuestion].answerC;
	answerButton4.textContent = questions[currentQuestion].answerD;
	}
)

answerButton1.addEventListener("click", function() {
	if (currentQuestion === 3){
		counter = counter + 1;
		rightAnswerCounter = rightAnswerCounter + 1;
		document.getElementById("counter").innerHTML = counter;
		document.getElementById("correct").innerHTML = rightAnswerCounter;
		document.getElementById("answersResult").innerHTML = " oikein.";
	} else {
		counter = counter + 1;
		document.getElementById("counter").innerHTML = counter;
		document.getElementById("answersResult").innerHTML = " väärin.";
	}
	}
)
answerButton2.addEventListener("click", function() {
	if (currentQuestion === 1 || currentQuestion === 2) {
		counter = counter + 1;
		rightAnswerCounter = rightAnswerCounter + 1;
		document.getElementById("counter").innerHTML = counter;
		document.getElementById("correct").innerHTML = rightAnswerCounter;
		document.getElementById("answersResult").innerHTML = " oikein.";
	}
	else {
		counter = counter + 1;
		document.getElementById("counter").innerHTML = counter;
		document.getElementById("answersResult").innerHTML = " väärin.";
	}
	}
)
answerButton3.addEventListener("click", function() {
	if (currentQuestion === 0) {
		counter = counter + 1;
		rightAnswerCounter = rightAnswerCounter + 1;
		document.getElementById("counter").innerHTML = counter;
		document.getElementById("correct").innerHTML = rightAnswerCounter;
		document.getElementById("answersResult").innerHTML = " oikein.";
	} else {
		counter = counter + 1;
		document.getElementById("counter").innerHTML = counter;
		document.getElementById("answersResult").innerHTML = " väärin.";
	}
	}
)
answerButton4.addEventListener("click", function() {
	if (currentQuestion === 4) {
		counter = counter + 1;
		rightAnswerCounter = rightAnswerCounter + 1;
		document.getElementById("counter").innerHTML = counter;
		document.getElementById("correct").innerHTML = rightAnswerCounter;
		document.getElementById("answersResult").innerHTML = " oikein.";
	}
	else {
		counter = counter + 1;
		document.getElementById("counter").innerHTML = counter;
		document.getElementById("answersResult").innerHTML = " väärin.";
	}
	}
)

nextButton.addEventListener("click", function(){
	currentQuestion = currentQuestion + 1;
	console.log(currentQuestion);
	document.getElementById("answersResult").innerHTML = "";
	questionDiv.innerHTML = questions[currentQuestion].question;
	answerButton1.textContent = questions[currentQuestion].answerA;
	answerButton2.textContent = questions[currentQuestion].answerB;
	answerButton3.textContent = questions[currentQuestion].answerC;
	answerButton4.textContent = questions[currentQuestion].answerD;
})

/* function nextQuestion()  */

soButton.addEventListener("click", function(){
	currentQuestion = 0;
	document.getElementById("divQuestion").classList.add("disappear");
	document.getElementById("startButton").classList.remove("disappear");
	document.getElementById("nextButton").classList.add("disappear");
	document.getElementById("soButton").classList.add("disappear");
	document.getElementById("answerP").classList.add("disappear");
	document.getElementById("answersResult").innerHTML = "";
	counter = 0;
	rightAnswerCounter = 0;
	document.getElementById("counter").innerHTML = "";
	document.getElementById("correct").innerHTML = "";
})

/* document.getElementById("counter").innerHTML = counter;
document.getElementById("correct").innerHTML = rightAnswerCounter; */