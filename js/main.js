// Ejercicio 1
const navMenu = document.querySelector('.menu');
const btnWater = document.getElementById('water');
const btnFire = document.getElementById('fire');
const btnElectric = document.getElementById('electric');

const colors = {
    water: getComputedStyle(document.documentElement).getPropertyValue('--type-water'),
    fire: getComputedStyle(document.documentElement).getPropertyValue('--type-fire'),
    electric: getComputedStyle(document.documentElement).getPropertyValue('--type-electric'),
};

// Evento para el botón "Agua"
btnWater.addEventListener('click', () => {
    navMenu.style.backgroundColor = colors.water;
});

// Evento para el botón "Fuego"
btnFire.addEventListener('click', () => {
    navMenu.style.backgroundColor = colors.fire;
});

// Evento para el botón "Eléctrico"
btnElectric.addEventListener('click', () => {
    navMenu.style.backgroundColor = colors.electric;
});
// Ejeecicio 2

// Ejercicio 3

