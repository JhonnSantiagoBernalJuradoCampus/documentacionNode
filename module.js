let lounge = ["Apolo", "Artemis", "Sputnik"];

const place = ()=>{
    return `Campus classrooms are: '${lounge.join(", ")}'`;
}
/**
 * *El archivo "modulo.js" exporta la funcion place utilizando module.exports
 * ? Crear archivo "modulo.js"
 */
module.exports = {
    place
}