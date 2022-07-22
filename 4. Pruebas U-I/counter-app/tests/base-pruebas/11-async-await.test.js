import { getImagen } from "../../src/base-pruebas/11-async-await"


describe('Test de 11-async-await', () => { 
    test('getImagen de retornar una URL', async () => {
        const url = await getImagen();
        expect(typeof url).toBe('string')
    })
})
