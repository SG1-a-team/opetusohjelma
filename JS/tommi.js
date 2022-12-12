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
        document.getElementById("score").innerHTML = "Tuloksesi on: " + scoreboard +  "/" + "5"
        document.getElementById("tulos1").innerHTML = "Vastauksesi on oikein"
       
    }else {
       document.getElementById("tulos1").innerHTML = "Nyt meni väärin, oikea vastaus olisi ollut Helsinki"
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
        document.getElementById("score").innerHTML = "Tuloksesi on: " + scoreboard +  "/" + "5"
        document.getElementById("tulos2").innerHTML = "Vastauksesi on oikein"
       
    }else {
       document.getElementById("tulos2").innerHTML = "Nyt meni väärin, oikea vastaus olisi ollut Tanska"
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
        document.getElementById("score").innerHTML = "Tuloksesi on: " + scoreboard +  "/" + "5"
        document.getElementById("tulos3").innerHTML = "Vastauksesi on oikein"
       
    }else {
       document.getElementById("tulos3").innerHTML = "Nyt meni väärin, oikea vastaus olisi ollut Pariisi"
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
        document.getElementById("score").innerHTML = "Tuloksesi on: " + scoreboard +  "/" + "5"
        document.getElementById("tulos4").innerHTML = "Vastauksesi on oikein"
       
    }else {
       document.getElementById("tulos4").innerHTML = "Nyt meni väärin, oikea vastaus olisi ollut Mount Everest"
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
        document.getElementById("score").innerHTML = "Tuloksesi on: " + scoreboard +  "/" + "5"
        document.getElementById("tulos5").innerHTML = "Vastauksesi on oikein";
       
    }else {
       document.getElementById("tulos5").innerHTML = "Nyt meni väärin, oikea vastaus olisi ollut Ruotsi"
    }    
    button5.disabled = true;
};

document.getElementById("score").innerHTML = "Täällä näet tuloksesi";




//Here we have the navbar JS. Separate functions for all bounce hover effects
//since we did not have the means to make the classlist adds/removes with shorter code

let link1 = document.getElementById('link1')
let home = document.getElementById('home');

function animation() {
    home.classList.add('fa-bounce');
}

function no_animation() {
    home.classList.remove('fa-bounce');
}

link1.addEventListener('mouseenter', animation);
link1.addEventListener('mouseleave', no_animation);

 //------//
let link2 = document.getElementById('link2')
let otter = document.getElementById('otter');

function animation2() {
    otter.classList.add('fa-bounce');
}

function no_animation2() {
    otter.classList.remove('fa-bounce');
}

link2.addEventListener('mouseenter', animation2);
link2.addEventListener('mouseleave', no_animation2);

//-----//

let link3 = document.getElementById('link3')
let kiwi = document.getElementById('kiwi');

function animation3() {
    kiwi.classList.add('fa-bounce');
}

function no_animation3() {
    kiwi.classList.remove('fa-bounce');
}

link3.addEventListener('mouseenter', animation3);
link3.addEventListener('mouseleave', no_animation3);

//-----//

let link4 = document.getElementById('link4')
let crow = document.getElementById('crow');

function animation4() {
    crow.classList.add('fa-bounce');
}

function no_animation4() {
    crow.classList.remove('fa-bounce');
}

link4.addEventListener('mouseenter', animation4);
link4.addEventListener('mouseleave', no_animation4);

//-----//

let link5 = document.getElementById('link5')
let frog = document.getElementById('frog');

function animation5() {
    frog.classList.add('fa-bounce');
}

function no_animation5() {
    frog.classList.remove('fa-bounce');
}

link5.addEventListener('mouseenter', animation5);
link5.addEventListener('mouseleave', no_animation5);

//-----//

let link6 = document.getElementById('link6')
let dog = document.getElementById('dog');

function animation6() {
    dog.classList.add('fa-bounce');
}

function no_animation6() {
    dog.classList.remove('fa-bounce');
}

link6.addEventListener('mouseenter', animation6);
link6.addEventListener('mouseleave', no_animation6);

//-----//

let link7 = document.getElementById('link7')
let bulb = document.getElementById('bulb');

function animation7() {
    bulb.classList.add('fa-bounce');
}

function no_animation7() {
    bulb.classList.remove('fa-bounce');
}

link7.addEventListener('mouseenter', animation7);
link7.addEventListener('mouseleave', no_animation7);