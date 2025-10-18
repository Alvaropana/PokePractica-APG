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
const listaPokemon = document.getElementById('listaPokemon');

async function cargarPokemones() {
  try {

    const response = await fetch('https://pokeapi.co/api/v2/pokemon?limit=151');
    const data = await response.json();

    data.results.forEach(async (pokemon) => {
 
      const res = await fetch(pokemon.url);
      const dataPokemon = await res.json();

      const div = document.createElement('div');
      div.classList.add('pokemon');

      const nombre = dataPokemon.name;
      const id = dataPokemon.id.toString().padStart(3, '0'); // Ej: 001
      const imagen = dataPokemon.sprites.other['official-artwork'].front_default;
      const tipos = dataPokemon.types.map(t => t.type.name);

      div.innerHTML = `
        <div class="pokemon-imagen">
          <img src="${imagen}" alt="${nombre}">
        </div>
        <div class="pokemon-info">
          <div class="nombre-contenedor">
            <p class="pokemon-id">#${id}</p>
            <h2 class="pokemon-nombre">${nombre}</h2>
          </div>
          <div class="pokemon-tipos">
            ${tipos.map(tipo => `<p class="tipo ${tipo}">${tipo}</p>`).join('')}
          </div>
        </div>
      `;
      listaPokemon.appendChild(div);
    });

  } catch (error) {
    console.error('Error al cargar los Pokémon:', error);
  }
}
cargarPokemones();
// Ejercicio 3

