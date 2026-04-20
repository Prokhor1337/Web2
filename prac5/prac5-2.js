"use strict";

const pokemonBtn = document.getElementById('loadPokemon');
const pokemonOutput = document.getElementById('pokemonOutput');

async function getPokemonData() {
    const pokemonNameOrId = prompt("Введіть ім'я або ID покемона (наприклад, 'pikachu' або '1'):");

    if (!pokemonNameOrId) return;

    try {
        pokemonOutput.textContent = "Завантаження покемона...";

        const response = await fetch(`https://pokeapi.co/api/v2/pokemon/${pokemonNameOrId.toLowerCase()}`);

        if (!response.ok) {
            throw new Error("Покемона не знайдено. Перевірте правильність імені або ID.");
        }

        const pokemon = await response.json();

        // Створюємо чистий об'єкт тільки з потрібними полями
        const info = {
            Name: pokemon.name,
            Id: pokemon.id,
            Type: pokemon.types.map(t => t.type.name),
            Weight: pokemon.weight,
            Height: pokemon.height
        };

        pokemonOutput.textContent = JSON.stringify(info, null, 2);

    } catch (error) {
        console.error("Помилка:", error);
        pokemonOutput.textContent = "Помилка: " + error.message;
    }
}

pokemonBtn.addEventListener('click', getPokemonData);