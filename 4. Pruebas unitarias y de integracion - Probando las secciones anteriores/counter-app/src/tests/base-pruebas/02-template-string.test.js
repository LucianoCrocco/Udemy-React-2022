import {getSaludo} from "../../base-pruebas/02-template-string"
import '@testing-library/jest-dom';

describe('Pruebas en 02-template-string.js', () => {
    test('getSaludo debe de retornar Hola Fernando', () => { 
        //Arrange
        const nombre = "Fernando";
        //Act
        const saludo = getSaludo(nombre);
        //Assert
        expect(saludo).toBe("Hola " + nombre);
    });

    //getSaludo debe retornar Hola Carlos! si no hay argumento en el nombre.
    test("getSaludo debe retornar Hola Carlos! si no hay argumento en el nombre", () => {
        const saludo = getSaludo();
        expect(saludo).toBe("Hola Carlos", + "!");
    });

 });