let link2 = document.getElementById('link2');
let otter = document.getElementById('otter');

function animation() {
    otter.classList.add('fa-bounce');
}

function no_animation() {
    otter.classList.remove('fa-bounce');
}

link2.addEventListener('mouseenter', animation);
link2.addEventListener('mouseleave', no_animation);


/* let link2 = document.getElementById('link2');
let otter = document.getElementById('otter');

function animation(ID) {
    ID.classList.add('fa-bounce');
}

function no_animation(ID) {
    ID.classList.remove('fa-bounce');
}

link2.addEventListener('mouseenter', animation(otter));
link2.addEventListener('mouseleave', no_animation(otter)); EI TOIMI TÄMÄ */

