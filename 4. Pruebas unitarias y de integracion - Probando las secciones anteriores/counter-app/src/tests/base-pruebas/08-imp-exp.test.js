import { getHeroeById, getHeroesByOwner } from "../../base-pruebas/08-imp-exp";
import heroes from "../../data/heroes";

describe('Prueba funciones en 08-imp-exp heroes', () => {
    test('Debe de retornar un heroe filtrado por ID', () => {
        const id = 1;
        const heroe =  getHeroeById(id);
        const heroeData = heroes.find(heroeData => heroeData.id === id);
        expect(heroe).toEqual(heroeData);
    })

    test('Debe de retornar undefined si heroe no existe', () => {
        const id = 7;
        const heroe =  getHeroeById(id);
        expect(heroe).toBe(undefined);
    })

    //Tarea
    test('Debe de retornar un arreglo con los heroes de DC', () => {
        const owner = "DC";
        const heroes =  getHeroesByOwner(owner);
        const heroesData = heroes.filter(heroeData => heroeData.owner === owner);
        expect(heroes).toEqual(heroesData);
    })

    test('Debe de retornar un arreglo con los heroes de Marvel', () => {
        const owner = "Marvel";
        const heroes =  getHeroesByOwner(owner);
        expect(heroes.length).toBe(2);
    })
 });