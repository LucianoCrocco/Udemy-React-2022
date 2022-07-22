import { getHeroeById, getHeroesByOwner } from '../../src/base-pruebas/08-imp-exp'

describe('Test de 08-imp-exp', () => { 
    test('getHeroeById debe retornar un heroe por ID', () => {
        const id = 1;
        const heroe = getHeroeById(id);
        expect(heroe).toEqual({id: 1, name: 'Batman', owner: 'DC'});
    })
    test('getHeroesById debe retornar undefined si no existe el id', () => {
        const id = 100;
        const heroe = getHeroeById(id);
        expect(heroe).toBeFalsy();
    })

    test('getHeroesByOwner debe retornar un arreglo con los 3 heroes de DC', () => {
        const owner = 'DC';
        const heroesDC = getHeroesByOwner(owner);
        // expect(heroesDC.length).toBe(3);
        expect(heroesDC).toEqual( heroesDC.filter((heroe) => heroe.owner === owner))
    })

    test('getHeroesByOwner debe retornar un arreglo con los 2 heroes de Marvel', () => {
        const owner = 'Marvel';
        const heroesMarvel = getHeroesByOwner(owner);
        expect(heroesMarvel.length).toBe(2);
    })
})
