// 7. Desestructuración de arreglos

const personajes = ['Goku', 'Vegeta', 'Trunks'];

/*
console.log(personajes[0]);
console.log(personajes[1]);
console.log(personajes[2]);
*/
const [ , , p3]  = personajes

console.log(p3);

const retoronaArreglo = () => {
    return ['ABC', 123];
}

const [letras, numeros] = retoronaArreglo();
console.log(letras, numeros);

//Tarea
// 1. El primer valor del arreglo se llamara nombre
// 2. Se llamara a setNombre
const UserState = (valor) => {
    return [valor, () => console.log('Hola Mundo')];
} 

const arr = UserState('Goku');
console.log(arr);
arr[1]();

const [ nombre, setNombre] = UserState(p3);
console.log(nombre);
setNombre();