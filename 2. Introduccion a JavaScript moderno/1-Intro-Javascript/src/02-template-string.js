//Template Strings
const nombre = 'Luciano';
const apellido = 'Crocco';

console.log (`${nombre} ${apellido}
${getSaludo(nombre)}`);

function getSaludo(nombre){
    return 'Hola ' + nombre;
}