import { getImagen } from "../../base-pruebas/11-async-await";

describe('Pruebas en 11-async-await.js y Fetch', () => {
    test('getImagen -> Retornar el URL de la imagen', async () => { 
        const url = await getImagen();
        expect(url.includes("https://")).toBe(true);
    }) 
});