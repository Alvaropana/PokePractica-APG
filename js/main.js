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
const pokemones151 = []; // Para guardar los 151 Pokémon
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
      const id = dataPokemon.id.toString().padStart(3, '0');
      const imagen = dataPokemon.sprites.other['official-artwork'].front_default;
      const tipos = dataPokemon.types.map(t => t.type.name);

      pokemones151.push({
        id: dataPokemon.id,
        nombre: dataPokemon.name,
        tipos: dataPokemon.types.map(t => t.type.name),
        imagen: dataPokemon.sprites.other['official-artwork'].front_default,
        peso: (dataPokemon.weight / 10).toFixed(1),
       altura: (dataPokemon.height / 10).toFixed(1)
    });

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
const inputBuscar = document.getElementById('inputBuscar');
const btnBuscar = document.getElementById('btnBuscar');
const resultado = document.getElementById('resultado');

function buscarPokemon() {
  const valor = inputBuscar.value.toLowerCase().trim();

  if (valor === '') {
    resultado.innerHTML = `<p>Por favor, escribe un nombre o ID.</p>`;
    return;
  }

  
  const encontrado = pokemones151.find(p =>
    p.nombre.toLowerCase() === valor || p.id.toString() === valor
  );

  if (encontrado) {
    resultado.innerHTML = `
      <div class="pokemon">
        <div class="pokemon-imagen">
          <img src="${encontrado.imagen}" alt="${encontrado.nombre}">
        </div>
        <div class="pokemon-info">
          <div class="nombre-contenedor">
            <p class="pokemon-id">#${encontrado.id.toString().padStart(3,'0')}</p>
            <h2 class="pokemon-nombre">${encontrado.nombre}</h2>
          </div>
          <div class="pokemon-tipos">
            ${encontrado.tipos.map(tipo => `<p class="tipo ${tipo}">${tipo}</p>`).join('')}
          </div>
          <p>Peso: ${encontrado.peso} kg</p>
          <p>Altura: ${encontrado.altura} m</p>
        </div>
      </div>
    `;
  } else {
    resultado.innerHTML = `<p style="color:red;">Pokémon no encontrado entre los 151 primeros</p>`;
  }
}


btnBuscar.addEventListener('click', buscarPokemon);
inputBuscar.addEventListener('keypress', (e) => {
  if (e.key === 'Enter') buscarPokemon();
});