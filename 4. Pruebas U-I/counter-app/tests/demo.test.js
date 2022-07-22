describe('Pruebas en el archivo NOMBRE', () => { 
    test ('NOMBRE PRUEBA - QUE ESPERA', ()=> {
        //Arrange
        const mensaje = "COMPARACION1";
        //Act
        const mensaje2 = `COMPARACION1`;
        //Assert
        expect(mensaje).toBe(mensaje2);
    });
});