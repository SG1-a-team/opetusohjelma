//Here we have the navbar JS
let link1 = document.getElementById('link2');
let link2 = document.getElementById('link2');
let link3 = document.getElementById('link2');
let link4 = document.getElementById('link2');
let link5 = document.getElementById('link2');
let link6 = document.getElementById('link2');
let link7 = document.getElementById('link2');
let otter = document.getElementById('otter');
let home = document.getElementById('home');
let kiwi = document.getElementById('kiwi');
let crow = document.getElementById('crow');
let frog = document.getElementById('frog');
let dog = document.getElementById('dog');
let bulb = document.getElementById('bulb');

function animation() {
    otter.classList.add('fa-bounce');
    home.classList.add('fa-bounce');
    kiwi.classList.add('fa-bounce');
    crow.classList.add('fa-bounce');
    frog.classList.add('fa-bounce');
    dog.classList.add('fa-bounce');
    bulb.classList.add('fa-bounce');
}

function no_animation() {
    otter.classList.remove('fa-bounce');
    home.classList.remove('fa-bounce');
    kiwi.classList.remove('fa-bounce');
    crow.classList.remove('fa-bounce');
    frog.classList.remove('fa-bounce');
    dog.classList.remove('fa-bounce');
    bulb.classList.remove('fa-bounce');
}


link1.addEventListener('mouseenter', animation);
link1.addEventListener('mouseleave', no_animation);
link2.addEventListener('mouseenter', animation);
link2.addEventListener('mouseleave', no_animation);
link3.addEventListener('mouseenter', animation);
link3.addEventListener('mouseleave', no_animation);
link4.addEventListener('mouseenter', animation);
link4.addEventListener('mouseleave', no_animation);
link5.addEventListener('mouseenter', animation);
link5.addEventListener('mouseleave', no_animation);
link6.addEventListener('mouseenter', animation);
link6.addEventListener('mouseleave', no_animation);
link7.addEventListener('mouseenter', animation);
link7.addEventListener('mouseleave', no_animation);
//Navbar JS ends here