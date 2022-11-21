let linkki1 = document.getElementById('linkki1');
let otter = document.getElementById('otter');

function animation() {
    otter.classList.add('fa-bounce');
}

function no_animation() {
    otter.classList.remove('fa-bounce');
}

linkki1.addEventListener('mouseenter', animation);
linkki1.addEventListener('mouseleave', no_animation);



