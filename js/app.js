const number = document.getElementById('poke-id');

const getRandomInt = (min, max) => {
    return Math.floor(Math.random() * (max - min)) + min;
}

document.addEventListener("DOMContentLoaded", () => {
    const ramdom = getRandomInt(1, 152);
    fetchData(ramdom);
    number.innerHTML = ramdom;
})

const fetchData = async (id) => {
    try {
        const res = await fetch(`https://pokeapi.co/api/v2/pokemon/${id}`);
        const data = await res.json();
        console.log(data);
        pintarPokemon(data);
    } catch (error) {
        console.log(error);
    }
}

const pintarPokemon = (pokemon) => {
    const display = document.querySelector('.display');
    const template = document.querySelector('#pokemon-data');
    
    template.querySelector('.poke-img').setAttribute('src', pokemon.sprites.other.dream_world.front_default );
    template.querySelector('.poke-name').textContent = pokemon.species.name;


    display.appendChild(template);
}