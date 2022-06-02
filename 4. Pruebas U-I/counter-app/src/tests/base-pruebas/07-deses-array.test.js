import {retornaArreglo} from "../../base-pruebas/07-deses-arr";

describe('Pruebas en 07-deses-arr.js', () => {
    test('Debe retornar un string y un numero', () => { 
        /*const arr = retornaArreglo();
        expect(arr).toEqual(["ABC", 123])*/
        const [letras, numeros] = retornaArreglo();

        //expect(letras).toEqual("ABC");
        expect(typeof letras).toBe("string");
        //expect(numeros).toEqual(123);
        expect(typeof numeros).toBe("number");
     })
 });