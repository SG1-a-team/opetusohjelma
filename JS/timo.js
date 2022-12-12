/* Stable variables for some elements from HTML */
let startButton = document.getElementById("startButton");
let nextButton = document.getElementById("nextButton");
let questionDiv = document.getElementById("question");
let answerButton1 = document.getElementById("answer1");
let answerButton2 = document.getElementById("answer2");
let answerButton3 = document.getElementById("answer3");
let answerButton4 = document.getElementById("answer4");
let starOverButton = document.getElementById("soButton");
let reward = document.getElementById("rewards");
/* Array for questions. */
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
	question: "Kuinka monta luuta on aikuisessa ihmisessä?",
	answerA: "314",
	answerB: "245",
	answerC: "180",
	answerD: "206",
	}
]
/* Counter variables for needed counters. */
let counter = 0;
let rightAnswerCounter = 0;
let currentQuestion = 0;
/* Function and eventlistener for start button. */
startButton.addEventListener("click", function(){
	currentQuestion = 0;
	document.getElementById("divQuestion").classList.remove("disappear");
	document.getElementById("answerP").classList.remove("disappear");
	document.getElementById("nextButton").classList.remove("disappear");
	document.getElementById("soButton").classList.remove("disappear");
	document.getElementById("pointDiv").classList.remove("disappear");
	document.getElementById("startButton").classList.add("disappear");
	document.getElementById("counter").innerHTML = counter;
	document.getElementById("correct").innerHTML = rightAnswerCounter;
	questionDiv.textContent = questions[currentQuestion].question;
	answerButton1.textContent = questions[currentQuestion].answerA;
	answerButton2.textContent = questions[currentQuestion].answerB;
	answerButton3.textContent = questions[currentQuestion].answerC;
	answerButton4.textContent = questions[currentQuestion].answerD;
	}
)
/* Next four function-eventlistener combos for each answer buttons. And yes, these are long and there is lots of repetition. */
answerButton1.addEventListener("click", function() {
	if (currentQuestion === 3){
		counter = counter + 1;
		rightAnswerCounter = rightAnswerCounter + 1;
		document.getElementById("counter").innerHTML = counter;
		document.getElementById("correct").innerHTML = rightAnswerCounter;
		document.getElementById("answersResult").innerHTML = " oikein!";
		answerButton1.disabled = true;
		answerButton2.disabled = true;
		answerButton3.disabled = true;
		answerButton4.disabled = true;
	} if (currentQuestion === 0) {
		counter = counter + 1;
		document.getElementById("counter").innerHTML = counter;
		document.getElementById("answersResult").innerHTML = " väärin. Oikea vastaus on Jupiter.";
		answerButton1.disabled = true;
		answerButton2.disabled = true;
		answerButton3.disabled = true;
		answerButton4.disabled = true;
	}if (currentQuestion === 1) {
		counter = counter + 1;
		document.getElementById("counter").innerHTML = counter;
		document.getElementById("answersResult").innerHTML = " väärin. Sienet ovat yleensä hajottajia.";
		answerButton1.disabled = true;
		answerButton2.disabled = true;
		answerButton3.disabled = true;
		answerButton4.disabled = true;
	}if (currentQuestion === 2) {
		counter = counter + 1;
		document.getElementById("counter").innerHTML = counter;
		document.getElementById("answersResult").innerHTML = " väärin. Laulujoutsen on Suomen kansallislintu.";
		answerButton1.disabled = true;
		answerButton2.disabled = true;
		answerButton3.disabled = true;
		answerButton4.disabled = true;
	}if (currentQuestion === 4) {
		counter = counter + 1;
		document.getElementById("counter").innerHTML = counter;
		document.getElementById("answersResult").innerHTML = " väärin. Aikuisessa ihmisessä on 206 luuta.";
		answerButton1.disabled = true;
		answerButton2.disabled = true;
		answerButton3.disabled = true;
		answerButton4.disabled = true;
	}
	if (rightAnswerCounter === 0) {
		reward.innerHTML = ZERO;
	} if (rightAnswerCounter === 1) {
		reward.innerHTML = ONE;
	} if (rightAnswerCounter === 2) {
		reward.innerHTML = TWO;
	} if (rightAnswerCounter === 3) {
		reward.innerHTML = THREE;
	} if (rightAnswerCounter === 4) {
		reward.innerHTML = FOUR;
	} if (rightAnswerCounter === 5) {
		reward.innerHTML = FIVE;
	}
	}
)
answerButton2.addEventListener("click", function() {
	if (currentQuestion === 1 || currentQuestion === 2) {
		counter = counter + 1;
		rightAnswerCounter = rightAnswerCounter + 1;
		document.getElementById("counter").innerHTML = counter;
		document.getElementById("correct").innerHTML = rightAnswerCounter;
		document.getElementById("answersResult").innerHTML = " oikein!";
		answerButton1.disabled = true;
		answerButton2.disabled = true;
		answerButton3.disabled = true;
		answerButton4.disabled = true;
	}if (currentQuestion === 0) {
		counter = counter + 1;
		document.getElementById("counter").innerHTML = counter;
		document.getElementById("answersResult").innerHTML = " väärin. Oikea vastaus on Jupiter.";
		answerButton1.disabled = true;
		answerButton2.disabled = true;
		answerButton3.disabled = true;
		answerButton4.disabled = true;
	}if (currentQuestion === 3) {
		counter = counter + 1;
		document.getElementById("counter").innerHTML = counter;
		document.getElementById("answersResult").innerHTML = " väärin. Sekä kuun ja auringon painovoima että Maan pyörimisliike vaikuttavat siihen.";
		answerButton1.disabled = true;
		answerButton2.disabled = true;
		answerButton3.disabled = true;
		answerButton4.disabled = true;
	}if (currentQuestion === 4) {
		counter = counter + 1;
		document.getElementById("counter").innerHTML = counter;
		document.getElementById("answersResult").innerHTML = " väärin. Aikuisessa ihmisessä on 206 luuta.";
		answerButton1.disabled = true;
		answerButton2.disabled = true;
		answerButton3.disabled = true;
		answerButton4.disabled = true;
	}
	if (rightAnswerCounter === 0) {
		reward.innerHTML = ZERO;
	} if (rightAnswerCounter === 1) {
		reward.innerHTML = ONE;
	} if (rightAnswerCounter === 2) {
		reward.innerHTML = TWO;
	} if (rightAnswerCounter === 3) {
		reward.innerHTML = THREE;
	} if (rightAnswerCounter === 4) {
		reward.innerHTML = FOUR;
	} if (rightAnswerCounter === 5) {
		reward.innerHTML = FIVE;
	}
	}
)
answerButton3.addEventListener("click", function() {
	if (currentQuestion === 0) {
		counter = counter + 1;
		rightAnswerCounter = rightAnswerCounter + 1;
		document.getElementById("counter").innerHTML = counter;
		document.getElementById("correct").innerHTML = rightAnswerCounter;
		document.getElementById("answersResult").innerHTML = " oikein!";
		answerButton1.disabled = true;
		answerButton2.disabled = true;
		answerButton3.disabled = true;
		answerButton4.disabled = true;
	} if (currentQuestion === 1) {
		counter = counter + 1;
		document.getElementById("counter").innerHTML = counter;
		document.getElementById("answersResult").innerHTML = " väärin. Sienet ovat yleensä hajottajia.";
		answerButton1.disabled = true;
		answerButton2.disabled = true;
		answerButton3.disabled = true;
		answerButton4.disabled = true;
	}if (currentQuestion === 2) {
		counter = counter + 1;
		document.getElementById("counter").innerHTML = counter;
		document.getElementById("answersResult").innerHTML = " väärin. Laulujoutsen on Suomen kansallislintu.";
		answerButton1.disabled = true;
		answerButton2.disabled = true;
		answerButton3.disabled = true;
		answerButton4.disabled = true;
	}if (currentQuestion === 3) {
		counter = counter + 1;
		document.getElementById("counter").innerHTML = counter;
		document.getElementById("answersResult").innerHTML = " väärin. Sekä kuun ja auringon painovoima että Maan pyörimisliike vaikuttavat siihen.";
		answerButton1.disabled = true;
		answerButton2.disabled = true;
		answerButton3.disabled = true;
		answerButton4.disabled = true;
	}if (currentQuestion === 4) {
		counter = counter + 1;
		document.getElementById("counter").innerHTML = counter;
		document.getElementById("answersResult").innerHTML = " väärin. Aikuisessa ihmisessä on 206 luuta.";
		answerButton1.disabled = true;
		answerButton2.disabled = true;
		answerButton3.disabled = true;
		answerButton4.disabled = true;
	}
	if (rightAnswerCounter === 0) {
		reward.innerHTML = ZERO;
	} if (rightAnswerCounter === 1) {
		reward.innerHTML = ONE;
	} if (rightAnswerCounter === 2) {
		reward.innerHTML = TWO;
	} if (rightAnswerCounter === 3) {
		reward.innerHTML = THREE;
	} if (rightAnswerCounter === 4) {
		reward.innerHTML = FOUR;
	} if (rightAnswerCounter === 5) {
		reward.innerHTML = FIVE;
	}
	}
)
answerButton4.addEventListener("click", function() {
	if (currentQuestion === 4) {
		counter = counter + 1;
		rightAnswerCounter = rightAnswerCounter + 1;
		document.getElementById("counter").innerHTML = counter;
		document.getElementById("correct").innerHTML = rightAnswerCounter;
		document.getElementById("answersResult").innerHTML = " oikein!";
		answerButton1.disabled = true;
		answerButton2.disabled = true;
		answerButton3.disabled = true;
		answerButton4.disabled = true;
	} if (currentQuestion === 0) {
		counter = counter + 1;
		document.getElementById("counter").innerHTML = counter;
		document.getElementById("answersResult").innerHTML = " väärin. Oikea vastaus on Jupiter.";
		answerButton1.disabled = true;
		answerButton2.disabled = true;
		answerButton3.disabled = true;
		answerButton4.disabled = true;
	} if (currentQuestion === 1) {
		counter = counter + 1;
		document.getElementById("counter").innerHTML = counter;
		document.getElementById("answersResult").innerHTML = " väärin. Sienet ovat yleensä hajottajia.";
		answerButton1.disabled = true;
		answerButton2.disabled = true;
		answerButton3.disabled = true;
		answerButton4.disabled = true;
	} if (currentQuestion === 2) {
		counter = counter + 1;
		document.getElementById("counter").innerHTML = counter;
		document.getElementById("answersResult").innerHTML = " väärin. Laulujoutsen on Suomen kansallislintu.";
		answerButton1.disabled = true;
		answerButton2.disabled = true;
		answerButton3.disabled = true;
		answerButton4.disabled = true;
	} if (currentQuestion === 3) {
		counter = counter + 1;
		document.getElementById("counter").innerHTML = counter;
		document.getElementById("answersResult").innerHTML = " väärin. Sekä kuun ja auringon painovoima että Maan pyörimisliike vaikuttavat siihen.";
		answerButton1.disabled = true;
		answerButton2.disabled = true;
		answerButton3.disabled = true;
		answerButton4.disabled = true;
	}
	if (rightAnswerCounter === 0) {
		reward.innerHTML = ZERO;
	} if (rightAnswerCounter === 1) {
		reward.innerHTML = ONE;
	} if (rightAnswerCounter === 2) {
		reward.innerHTML = TWO;
	} if (rightAnswerCounter === 3) {
		reward.innerHTML = THREE;
	} if (rightAnswerCounter === 4) {
		reward.innerHTML = FOUR;
	} if (rightAnswerCounter === 5) {
		reward.innerHTML = FIVE;
	}
	}
)
const ZERO = "Oot aika mato!";
const ONE = "Vielä pitää harjoitella!";
const TWO = "Olet vielä ravintoketjun pohjalla.";
const THREE = "Ihan jeesh!";
const FOUR = "Olet yhtä fiksu kuin simpanssi!";
const FIVE = "Ympäristötiedon kunkku!";

/* Function with eventlistener for next button. */
nextButton.addEventListener("click", function(){
	currentQuestion = currentQuestion + 1;
	console.log(currentQuestion);
	document.getElementById("answersResult").innerHTML = "";
	questionDiv.innerHTML = questions[currentQuestion].question;
	answerButton1.textContent = questions[currentQuestion].answerA;
	answerButton2.textContent = questions[currentQuestion].answerB;
	answerButton3.textContent = questions[currentQuestion].answerC;
	answerButton4.textContent = questions[currentQuestion].answerD;
	answerButton1.disabled = false;
	answerButton2.disabled = false;
	answerButton3.disabled = false;
	answerButton4.disabled = false;
	}
)
/* Function with eventlistener for star over button. */
soButton.addEventListener("click", function(){
	currentQuestion = 0;
	document.getElementById("divQuestion").classList.add("disappear");
	document.getElementById("startButton").classList.remove("disappear");
	document.getElementById("nextButton").classList.add("disappear");
	document.getElementById("soButton").classList.add("disappear");
	document.getElementById("answerP").classList.add("disappear");
	document.getElementById("pointDiv").classList.add("disappear");
	document.getElementById("answersResult").innerHTML = "";
	reward.innerHTML = "";
	counter = 0;
	rightAnswerCounter = 0;
	document.getElementById("counter").innerHTML = "";
	document.getElementById("correct").innerHTML = "";
	answerButton1.disabled = false;
	answerButton2.disabled = false;
	answerButton3.disabled = false;
	answerButton4.disabled = false;
	nextButton.disabled = false;
	}
)