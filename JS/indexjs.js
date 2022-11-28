//Here we have the navbar JS
let link2 = document.getElementById('link2');
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


link2.addEventListener('mouseenter', animation);
link2.addEventListener('mouseleave', no_animation);
//Navbar JS ends here