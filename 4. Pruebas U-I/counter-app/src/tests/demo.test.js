describe('Pruebas en el archivo demo.test.js', () => { 
    test ('Deben de ser iguales los string', ()=>{
        //Arrange
        const mensaje = "Hola mundo";
        //Act
        const mensaje2 = `Hola mundo`;
        //Assert
        
        expect(mensaje).toBe(mensaje2);
    });
});

