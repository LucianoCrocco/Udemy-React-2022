//Funciones JavaScript
/*
function saludar (nombre) {
    return `Hola, ${nombre}`;
}

saludar = 20;
*/
const saludar2 = function (nombre){
    return `Hola, ${nombre}`
}

const saludar3 = (nombre) => `Hola, ${nombre}`;


//console.log(saludar);    
console.log(saludar2("Goku"));    
console.log(saludar3("Vegeta"));    

const getUser = () => {
    return {
        uid: 'ABC123',
        username:'El_Papi1502'
    }
}

const getUser2 = () => ({uid: 'ABC123', username:'El_Papi1502'})

console.log(getUser());
console.log(getUser2());


//Tarea
/*
1. Tranformar a una funcion flecha
2. Tiene que retornar un objeto implicito
3. Probarlo

function getUsuarioActivo (nombre) {
    return {
        uid: 'ABC567',
        username:nombre
    }
} 
*/
const getUsuarioActivo = nombre => ({uid: 'ABC567', username:nombre});

const usuarioActivo = getUsuarioActivo("Luciano");

console.log(usuarioActivo);