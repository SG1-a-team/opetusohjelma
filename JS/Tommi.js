let scoreboard = 0
let button1 = document.getElementById("kysymys1");
let button2 = document.getElementById("kysymys2");
let button3 = document.getElementById("kysymys3");
let button4 = document.getElementById("kysymys4");
let button5 = document.getElementById("kysymys5");

button1.addEventListener("click", firstQuestion)
button2.addEventListener("click", secondQuestion)
button3.addEventListener("click", thirdQuestion)
button4.addEventListener("click", fourthQuestion)
button5.addEventListener("click", fifthQuestion)

function firstQuestion(){
    let valinta = document.getElementById("vastaus3");
    if(valinta.checked == true){
        scoreboard = scoreboard + 1
        document.getElementById("tulos1").innerHTML = "Vastauksesi on oikein" + "<br>" + "Sinulla on pisteitä kasassa: " + scoreboard;
       
    }else {
       document.getElementById("tulos1").innerHTML = "Nyt meni väärin, oikea vastaus olisi ollut Helsinki" + "<br>" + "Sinulla on pisteitä kasassa: " + scoreboard;
    }     
};

function secondQuestion(){
    let valinta = document.getElementById("vastaus5");
    if(valinta.checked == true){
        scoreboard = scoreboard + 1
        document.getElementById("tulos2").innerHTML = "Vastauksesi on oikein" + "<br>" + "Sinulla on pisteitä kasassa: " + scoreboard;
       
    }else {
       document.getElementById("tulos2").innerHTML = "Nyt meni väärin, oikea vastaus olisi ollut Tanska" + "<br>" + "Sinulla on pisteitä kasassa: " + scoreboard;
    }     
};
function thirdQuestion(){
    let valinta = document.getElementById("vastaus10");
    if(valinta.checked == true){
        scoreboard = scoreboard + 1
        document.getElementById("tulos3").innerHTML = "Vastauksesi on oikein" + "<br>" + "Sinulla on pisteitä kasassa: " + scoreboard;
       
    }else {
       document.getElementById("tulos3").innerHTML = "Nyt meni väärin, oikea vastaus olisi ollut Pariisi" + "<br>" + "Sinulla on pisteitä kasassa: " + scoreboard;
    }     
};
function fourthQuestion(){
    let valinta = document.getElementById("vastaus15");
    if(valinta.checked == true){
        scoreboard = scoreboard + 1
        document.getElementById("tulos4").innerHTML = "Vastauksesi on oikein" + "<br>" + "Sinulla on pisteitä kasassa: " + scoreboard;
       
    }else {
       document.getElementById("tulos4").innerHTML = "Nyt meni väärin, oikea vastaus olisi ollut Mount Everest" + "<br>" + "Sinulla on pisteitä kasassa: " + scoreboard;
    }     
};
function fifthQuestion(){
    let valinta = document.getElementById("vastaus18");
    if(valinta.checked == true){
        scoreboard = scoreboard + 1
        document.getElementById("tulos5").innerHTML = "Vastauksesi on oikein" + "<br>" + "Sinulla on pisteitä kasassa: " + scoreboard;
       
    }else {
       document.getElementById("tulos5").innerHTML = "Nyt meni väärin, oikea vastaus olisi ollut Ruotsi" + "<br>" + "Sinulla on pisteitä kasassa: " + scoreboard;
    }     
};

