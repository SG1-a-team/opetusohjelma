//Here we have the navbar JS
let link1 = document.getElementById('link1')
let otter = document.getElementById('otter');

function animation() {
    otter.classList.add('fa-bounce');
}

function no_animation() {
    otter.classList.remove('fa-bounce');
}



link1.addEventListener('mouseenter', animation);
link1.addEventListener('mouseleave', no_animation);


let link2 = document.getElementById('link2');
let home = document.getElementById('home')

function animation() {
    home.classList.add('fa-bounce');
}
function no_animation() {
    home.classList.remove('fa-bounce');
}
link2.addEventListener('mouseenter', animation);
link2.addEventListener('mouseleave', no_animation);
//Navbar JS ends here




