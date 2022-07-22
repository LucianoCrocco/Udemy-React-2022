import { getHeroeByIdAsync } from "../../src/base-pruebas/09-promesas"

describe('Test de 09-promesas', () => { 
    test('Debe de retornar un heroe', (done) => {
        const id = 1;
        getHeroeByIdAsync(id)
        .then((hero) => {
            expect(hero).toEqual({
                id: 1,
                name: 'Batman',
                owner: 'DC'
            });
            done();
        });
    })

    test('Debe obtener un error si el heroe no existe', (done) => {
        const id = 100;
        getHeroeByIdAsync(id)
        .catch((error) => {
            expect(error).toBe(`No se pudo encontrar el héroe`);
            done();
        });
    })
})
