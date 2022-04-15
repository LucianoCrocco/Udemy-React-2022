//Import, export y funciones comunes de arreglos
import personajes, {owners} from './data/heroesDefault';


console.log(personajes);

const getHeroeById = (id) => {
    return personajes.find(pj => pj.id === id);
}

console.log(getHeroeById(2));

const getHeroesByOwner = (owner) => personajes.filter(pj => pj.owner === owner);


console.log(getHeroesByOwner('DC'));
console.log(owners)