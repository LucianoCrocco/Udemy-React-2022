// 7. Desestructuración de objetos
const persona = {
    nombre:'Tony',
    edad:45,
    clave:'Iron Man'
};

//console.log(persona.nombre);
//console.log(persona.edad);
//console.log(persona.clave);

const {nombre, edad, clave} = persona

const retornaPersona = ({nombre, edad, rango = 'Capitan'}) => {
    console.log(nombre, edad, rango);
}

const UseContext = ({clave, edad}) => {
    return {
        nombreClave:clave,
        anios:edad,
        latlng:{
            lat:14.1232,
            lng:-12.3232
        }
    }
}

console.log(nombre);
console.log(edad);
console.log(clave);

retornaPersona(persona);

const {nombreClave, anios, latlng:{lat, lng}} = UseContext(persona);
console.log(nombreClave, anios);
console.log(lat, lng);