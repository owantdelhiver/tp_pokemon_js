export default class Pokemon {
    constructor(id, name,size, weight,types, hpMax, attaques) {
        this.id = id;
        this.name = name;
        this.size = size;
        this.weight = weight;
        this.types = types;
        this.hp = hpMax;
        this.hpMax = hpMax;
        this.attaques = attaques;
    }

    attaque(pokemon) {
        let mult = Math.random() > 0.1 ? 1 : 2;
        let idAttaque = 0.2 < this.hp / this.hpMax ? 0 : 1;
        if(mult === 2) {
            console.log("Coup critique !")
        }

        console.log(`${this.name} attaque ${this.attaques[idAttaque].name} et fait ${this.attaques[idAttaque].value} de degat`)
        pokemon.hp -= this.attaques[idAttaque].value * mult;
        console.log();
    };

    isDead() {
        return this.hp <= 0;
    };
}