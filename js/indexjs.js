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








