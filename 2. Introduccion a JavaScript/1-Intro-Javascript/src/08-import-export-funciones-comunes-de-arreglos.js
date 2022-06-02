//Import, export y funciones comunes de arreglos
import { heroes  } from "./data/heroes.js";


console.log(heroes);

const getHeroeById = (id) => {
    return heroes.find(pj => pj.id === id);
}

console.log(getHeroeById(2));

const getHeroesByOwner = (owner) => heroes.filter(pj => pj.owner === owner);


console.log(getHeroesByOwner('DC'));