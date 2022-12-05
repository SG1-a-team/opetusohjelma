//Creating some print constants at first

const RIGHT = '<b>' + 'Vastasit oikein!' + '</b>';
const WRONG = '<b>' + 'Voi harmi, vastasit väärin' + '</b>';
const CORRECT_Q1 = '<li>' + 'pear = päärynä' + '<li>' + 'pineapple = ananas' + '<li>' + 'cherry = kirsikka' + '<li>' + 'grape = viinirypäle';
const CORRECT_Q2 = '<li>' + 'thunderstorm = ukkosmyrsky' + '<li>' + 'waterfall = vesiputous' + '<li>' + 'surface = pinta' + '<li>' + 'blackout = sähkökatko';
const CORRECT_Q3 = '<li>' + 'So far so good = toistaiseksi menee hyvin' + '<li>' + 'better late than ever = parempi myöhään kun ei milloinkaan' + '<li>' + 'To make matters worse = pahentaa tilannetta' + '<li>' + "that's the last straw = nyt katkesi kamelin selkä ";
const CORRECT_Q4 = '<li>' + 'porsas = pig' + '<li>' + 'aita = fence' + '<li>' + 'tie = road' + '<li>' + 'haarukka = fork';
const CORRECT_Q5 = '<li>' + 'happy = iloinen' + '<li>' + 'good = hyvä' + '<li>' + 'merry = iloinen' + '<li>' + 'lucky = onnekas';

//Also variables & constants for some repeatable html elements

 var answersAmount = document.getElementById('answersAmount');
 var correctAmount = document.getElementById('correctAmount');
 var answerButton1 = document.getElementById('answer1');
 var answerButton2 = document.getElementById('answer2');
 var answerButton3 = document.getElementById('answer3');
 var answerButton4 = document.getElementById('answer4');
 var answerButton5 = document.getElementById('answer5');
 var nextButton1 = document.getElementById('next1');
 var nextButton2 = document.getElementById('next2');
 var nextButton3 = document.getElementById('next3');
 var nextButton4 = document.getElementById('next4');
 var nextButton5 = document.getElementById('next5');


 
 const FEEDBACK = document.getElementById('feedback');

//Functions to make some things easier

/**
 * 
 * @param {HTML element} ID 
 */

function element(ID){
    document.getElementById(ID)
}

//player alias

function print_alias() {
    let alias = document.getElementById('name').value
    document.getElementById('name').value = "";
    document.querySelector('h3').textContent = 'Tervetuloa tekemään enkkutestiä ' + alias + '!'
    document.getElementById('feedback').innerHTML = 'Kiva kun tulit tekemään testiä ' + alias + '! Kylläpä on jännittävää'  
}

let aliasButton = document.getElementById('alias');
aliasButton.addEventListener('click', print_alias);

//Counter to keep track
 let counter = 0;
 let correctCounter = 0;

//QUESTION 1

function check_q1() {

    //define variables
    let answerInput = document.getElementById("printResult1");
    
    answerInput.innerHTML = "";
    counter++;
    
    //disable button, so answer cannot be changed

    answerButton1.disabled = 'true';

    //If answer is correct:

    if (document.getElementById('q1a2').checked == true) {
        answerInput.innerHTML = RIGHT + CORRECT_Q1;
        correctCounter++;
        document.getElementById('prize1').innerHTML = '<i class="fa-solid fa-star fa-beat">' + '</i>'
    }

    //If answer is not correct

    else {
        answerInput.innerHTML = WRONG + CORRECT_Q1;
        document.getElementById('prize1').innerHTML = '<i class="fa-solid fa-xmark"></i>'
    }

    answersAmount.textContent = 'Vastatut kysymykset: ' + counter + '/5';
    correctAmount.textContent = 'Oikeat vastaukset: ' + correctCounter;
    nextButton1.classList.remove('invisible');   
}

answerButton1.addEventListener('click', check_q1);

//Move to next question by making the div visible

function next_question1() {
    document.getElementById('quiz1').classList.add('invisible');
    document.getElementById('quiz2').classList.remove('invisible');
}

nextButton1.addEventListener('click', next_question1);

// QUESTION 2

function check_q2() {

    //define variables
    let answerInput = document.getElementById("printResult2");
    
    answerInput.innerHTML = "";
    counter++;
    
    //disable button, so answer cannot be changed

    answerButton2.disabled = 'true';

    //If answer is correct:

    if (document.getElementById('q2a1').checked == true) {
        answerInput.innerHTML = RIGHT + CORRECT_Q2;
        correctCounter++;
        document.getElementById('prize2').innerHTML = '<i class="fa-solid fa-star fa-beat">' + '</i>'
    }

    //If answer is not correct

    else {
        answerInput.innerHTML = WRONG + CORRECT_Q2;
        document.getElementById('prize2').innerHTML = '<i class="fa-solid fa-xmark"></i>'
    }

    answersAmount.textContent = 'Vastatut kysymykset: ' + counter + '/5';
    correctAmount.textContent = 'Oikeat vastaukset: ' + correctCounter;
    nextButton2.classList.remove('invisible');
    
}

answerButton2.addEventListener('click', check_q2);

//Move to next question by making the div visible

function next_question2() {
    document.getElementById('quiz2').classList.add('invisible');
    document.getElementById('quiz3').classList.remove('invisible');
}

nextButton2.addEventListener('click', next_question2);

// QUESTION 3

function check_q3() {

    //define variables
    let answerInput = document.getElementById("printResult3");
    answerInput.innerHTML = "";
    counter++;
    
    //disable button, so answer cannot be changed

    answerButton3.disabled = 'true';

    //If answer is correct:

    if (document.getElementById('q3a2').checked == true) {
        answerInput.innerHTML = RIGHT + CORRECT_Q3;
        correctCounter++;
        document.getElementById('prize3').innerHTML = '<i class="fa-solid fa-star fa-beat">' + '</i>'
    }

    //If answer is not correct

    else {
        answerInput.innerHTML = WRONG + CORRECT_Q3;
        document.getElementById('prize3').innerHTML = '<i class="fa-solid fa-xmark"></i>'
    }

    answersAmount.textContent = 'Vastatut kysymykset: ' + counter + '/5';
    correctAmount.textContent = 'Oikeat vastaukset: ' + correctCounter;
    nextButton3.classList.remove('invisible');
    
}

answerButton3.addEventListener('click', check_q3);

//Move to next question by making the div visible

function next_question3() {
    document.getElementById('quiz3').classList.add('invisible');
    document.getElementById('quiz4').classList.remove('invisible');
}

nextButton3.addEventListener('click', next_question3);

// QUESTION 4

function check_q4() {

    //define variables
    let answerInput = document.getElementById("printResult4");
    answerInput.innerHTML = "";
    counter++;
    
    //disable button, so answer cannot be changed

    answerButton4.disabled = 'true';

    //If answer is correct:

    if (document.getElementById('q4a4').checked == true) {
        answerInput.innerHTML = RIGHT + CORRECT_Q4;
        correctCounter++;
        document.getElementById('prize4').innerHTML = '<i class="fa-solid fa-star fa-beat">' + '</i>'
    }

    //If answer is not correct

    else {
        answerInput.innerHTML = WRONG + CORRECT_Q4;
        document.getElementById('prize4').innerHTML = '<i class="fa-solid fa-xmark"></i>'
    }

    answersAmount.textContent = 'Vastatut kysymykset: ' + counter + '/5';
    correctAmount.textContent = 'Oikeat vastaukset: ' + correctCounter;
    nextButton4.classList.remove('invisible');
    
}

answerButton4.addEventListener('click', check_q4);

//Move to next question by making the div visible

function next_question4() {
    document.getElementById('quiz4').classList.add('invisible');
    document.getElementById('quiz5').classList.remove('invisible');
}

nextButton4.addEventListener('click', next_question4);

//QUESTION 5

function check_q5() {

    //define variables
    let answerInput = document.getElementById("printResult5");
    answerInput.innerHTML = "";
    counter++;
    
    //disable button, so answer cannot be changed

    answerButton5.disabled = 'true';

    //If answer is correct:

    if (document.getElementById('q5a4').checked == true) {
        answerInput.innerHTML = RIGHT + CORRECT_Q5;
        correctCounter++;
        document.getElementById('prize5').innerHTML = '<i class="fa-solid fa-star fa-beat"></i>'
    }

    //If answer is not correct

    else {
        answerInput.innerHTML = WRONG + CORRECT_Q5;
        document.getElementById('prize5').innerHTML = '<i class="fa-solid fa-xmark"></i>'
    }

    answersAmount.textContent = 'Vastatut kysymykset: ' + counter + '/5';
    correctAmount.textContent = 'Oikeat vastaukset: ' + correctCounter;
    nextButton5.classList.remove('invisible');
    
}

answerButton5.addEventListener('click', check_q5);

//Move to next question by making the div visible

function feedback() {
    //CLASSIFICATION OF RESULTS:

if (correctCounter <= 2) {
    FEEDBACK.innerHTML = 'Englannin kieli vaatii sinulta vielä hieman harjoittelua'
}

else if (correctCounter < 4) {
    FEEDBACK.innerHTML = 'Teit hienoa työtä!'
}

else if (correctCounter < 5) {
    FEEDBACK.innerHTML = 'Mahtavaa! Sait melkein kaikki oikein.'
}

else {
    FEEDBACK.innerHTML = 'Huipputulos, kaikki oikein!'
}
    
}

nextButton5.addEventListener('click', feedback);

