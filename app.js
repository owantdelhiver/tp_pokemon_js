import Pokemon from "./modules/Pokemon.js";
import Attaque from "./modules/Attaque.js";

function pokeSwap() {
    let temp = pokemons[0];
    pokemons[0] = pokemons[1];
    pokemons[1] = temp;
}
function combat(pokemons) {
    while(!pokemons[0].isDead()) {
        console.log(`${pokemons[0].name} a ${pokemons[0].hp} points de vie.`)
        pokemons[0].attaque(pokemons[1]);
        if(pokemons[1].isDead()) {
            console.log(`${pokemons[0].name} a gagné le combat. Il lui restait ${pokemons[0].hp} hp`);
        }

        pokeSwap();
    }
}

let pikachu = new Pokemon("025", "Pikachu", 40, 6, "electrik", 82, [new Attaque("statik", 10), new Attaque("paratonnerre", 25)] );
let evoli = new Pokemon("133", "Evoli", 30, 6.5, "normal", 70,[new Attaque("adaptabilité", 9), new Attaque("anticipation", 15)]);

let pokemons = [];
pokemons.push(pikachu, evoli);

if(Math.floor(Math.random() * 2) === 1) {
    pokeSwap();
}

console.log("Pikachu VS Evoli");
console.log(`Le tirage au sort a décidé que ${pokemons[0].name} attaquait en premier`);
console.log();

for(let pokemon of pokemons) {
    console.log(`${pokemon.name} a ${pokemon.hp} points de vie.`);
}
console.log();

combat(pokemons);