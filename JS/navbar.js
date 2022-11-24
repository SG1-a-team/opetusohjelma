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

