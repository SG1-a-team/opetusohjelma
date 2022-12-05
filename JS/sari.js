//Creating some print constants at first

const RIGHT = '<b>' + 'Vastasit oikein!' + '</b>'
const WRONG = '<b>' + 'Voi harmi, vastasit väärin' + '</b>'
const CORRECT_Q1 = '<li>' + 'pear = päärynä' + '<li>' + 'pineapple = ananas' + '<li>' + 'cherry = kirsikka' + '<li>' + 'grape = viinirypäle'
const CORRECT_Q2 = '<li>' + 'thunderstorm = ukkosmyrsky' + '<li>' + 'waterfall = vesiputous' + '<li>' + 'surface = pinta' + '<li>' + 'blackout = sähkökatko'
const CORRECT_Q3 = '<li>' + 'So far so good = toistaiseksi menee hyvin' + '<li>' + 'better late than ever = parempi myöhään kun ei milloinkaan' + '<li>' + 'To make matters worse = pahentaa tilannetta' + '<li>' + "that's the last straw = nyt katkesi kamelin selkä "
const CORRECT_Q4 = '<li>' + 'porsas = pig' + '<li>' + 'aita = fence' + '<li>' + 'tie = road' + '<li>' + 'haarukka = fork'
const CORRECT_Q5 = '<li>' + 'happy = iloinen' + '<li>' + 'good = hyvä' + '<li>' + 'merry = iloinen' + '<li>' + 'lucky = onnekas'


//Functions to make some things easier

/**
 * 
 * @param {HTML element} ID 
 */

function element(ID){
    document.getElementById(ID)
}

//Counter to keep track
 counter = 0;


function check_q1() {
    let checkbox = document.getElementsByClassName("check")
    let answerInput = document.getElementById("printResult1")
    answerInput.innerHTML = "";

    if (checkbox.checked == false) {
        answerInput.innerHTML = "Valitse yksi vaihtoehdoista";
    } 

    if (document.getElementById('q1a2').checked == true) {
        answerInput.innerHTML = RIGHT + CORRECT_Q1;
    }

    else {answerInput.innerHTML = WRONG + CORRECT_Q1}
    

}

let answerButton1 = document.getElementById('answer1');
answerButton1.addEventListener('click', check_q1);