let scoreboard = 0;

let button0 = document.querySelector(".aloita_peli");
let button1 = document.getElementById("kysymys1");
let button2 = document.getElementById("kysymys2");
let button3 = document.getElementById("kysymys3");
let button4 = document.getElementById("kysymys4");
let button5 = document.getElementById("kysymys5");

button0.addEventListener("click", startGame)
button1.addEventListener("click", firstQuestion)
button2.addEventListener("click", secondQuestion)
button3.addEventListener("click", thirdQuestion)
button4.addEventListener("click", fourthQuestion)
button5.addEventListener("click", fifthQuestion)

//Start game and hide class ".side"
function startGame(){
    document.querySelector(".quiz1").classList.remove("piilotettu");
    document.querySelector(".side").classList.add("piilotettu");
    
}

//First question and disable button after
function firstQuestion(){
    let valinta = document.getElementById("vastaus3");
    if(valinta.checked == true){
        scoreboard = scoreboard + 1
        document.getElementById("score1").innerHTML = "Tuloksesi on: " + scoreboard +  "/" + "5"
        document.getElementById("tulos1").innerHTML = "Vastauksesi on oikein " + "<br> <span style='font-size:1.5em;'>&#9989;</span>"
       
    }else {
       document.getElementById("tulos1").innerHTML = "Nyt meni väärin, oikea vastaus olisi ollut Helsinki" + "<br> <span style='font-size:1.5em;'>&#129510;</span>"
       document.getElementById("score1").innerHTML = "Tuloksesi on: " + scoreboard +  "/" + "5"
    }     
    button1.disabled = true;
    document.querySelector(".seuraava1").classList.remove("piilotettu");
};
//Next question and hide previous question
document.querySelector(".seuraava1").addEventListener("click", () => {
    document.querySelector(".quiz2").classList.remove("piilotettu");
    document.querySelector(".quiz1").classList.add("piilotettu");
});

//Second question and disable button after
function secondQuestion(){
    let valinta = document.getElementById("vastaus5");
    if(valinta.checked == true){
        scoreboard = scoreboard + 1
        document.getElementById("score2").innerHTML = "Tuloksesi on: " + scoreboard +  "/" + "5"
        document.getElementById("tulos2").innerHTML = "Vastauksesi on oikein " + "<br> <span style='font-size:1.5em;'>&#9989;</span>"
       
    }else {
       document.getElementById("tulos2").innerHTML = "Nyt meni väärin, oikea vastaus olisi ollut Tanska" + "<br> <span style='font-size:1.5em;'>&#129510;</span>"
       document.getElementById("score2").innerHTML = "Tuloksesi on: " + scoreboard +  "/" + "5"
    }
    button2.disabled = true;
    document.querySelector(".seuraava2").classList.remove("piilotettu"); 
};
//Next question and hide previous question
document.querySelector(".seuraava2").addEventListener("click", () => {
    document.querySelector(".quiz3").classList.remove("piilotettu");
    document.querySelector(".quiz2").classList.add("piilotettu");
});

//Third question and disable button after
function thirdQuestion(){
    let valinta = document.getElementById("vastaus10");
    if(valinta.checked == true){
        scoreboard = scoreboard + 1
        document.getElementById("score3").innerHTML = "Tuloksesi on: " + scoreboard +  "/" + "5"
        document.getElementById("tulos3").innerHTML = "Vastauksesi on oikein " + "<br> <span style='font-size:1.5em;'>&#9989;</span>"
       
    }else {
       document.getElementById("tulos3").innerHTML = "Nyt meni väärin, oikea vastaus olisi ollut Pariisi" + "<br> <span style='font-size:1.5em;'>&#129510;</span>"
       document.getElementById("score3").innerHTML = "Tuloksesi on: " + scoreboard +  "/" + "5"
    }    
    button3.disabled = true;
    document.querySelector(".seuraava3").classList.remove("piilotettu");
};
//Next question and hide previous question
document.querySelector(".seuraava3").addEventListener("click", () => {
    document.querySelector(".quiz4").classList.remove("piilotettu");
    document.querySelector(".quiz3").classList.add("piilotettu");
});

//Fourth question and disable button after
function fourthQuestion(){
    let valinta = document.getElementById("vastaus15");
    if(valinta.checked == true){
        scoreboard = scoreboard + 1
        document.getElementById("score4").innerHTML = "Tuloksesi on: " + scoreboard +  "/" + "5"
        document.getElementById("tulos4").innerHTML = "Vastauksesi on oikein " + "<br> <span style='font-size:1.5em;'>&#9989;</span>"
       
    }else {
       document.getElementById("tulos4").innerHTML = "Nyt meni väärin, oikea vastaus olisi ollut Mount Everest" + "<br> <span style='font-size:1.5em;'>&#129510;</span>"
       document.getElementById("score4").innerHTML = "Tuloksesi on: " + scoreboard +  "/" + "5"
    }  
    button4.disabled = true;
    document.querySelector(".seuraava4").classList.remove("piilotettu");   
};

//Next question and hide previous question
document.querySelector(".seuraava4").addEventListener("click", () => {
    document.querySelector(".quiz5").classList.remove("piilotettu");
    document.querySelector(".quiz4").classList.add("piilotettu");
});

//Fifth question and disable button after
function fifthQuestion(){
    let valinta = document.getElementById("vastaus18");
    if(valinta.checked == true){
        scoreboard = scoreboard + 1;
        document.getElementById("tulos5").innerHTML = "Vastauksesi on oikein " + "<br> <span style='font-size:1.5em;'>&#9989;</span>"
       
    }else {
       document.getElementById("tulos5").innerHTML = "Nyt meni väärin, oikea vastaus olisi ollut Ruotsi" + "<br> <span style='font-size:1.5em;'>&#129510;</span>"
    }    
    button5.disabled = true;
    if (scoreboard <= 2){
        document.getElementById("score5").innerHTML = "Lopullinen tuloksesi on: " + scoreboard +  "/" + "5" + "<br> Nyt ei mennyt ihan nappiin"
    }
    else if(scoreboard <= 3){
        document.getElementById("score5").innerHTML = "Lopullinen tuloksesi on: " + scoreboard +  "/" + "5" + "<br> Selvisit keskivertoa paremmin"
    }
    else if (scoreboard <= 4){
        document.getElementById("score5").innerHTML = "Lopullinen tuloksesi on: " + scoreboard +  "/" + "5" + "<br> Hyvä, melkein kaikki oikein"
    }
    else if (scoreboard <= 5){
        document.getElementById("score5").innerHTML = "Lopullinen tuloksesi on: " + scoreboard +  "/" + "5" + "<br> Tämähän meni erittäin hyvin"
    }
};

