// Require fs
/**
 * * fs.appendFileSync(file,data, options):
 * ? Agrega datos al final de un archivo de forma sincrónica (bloqueante)
 * @param file: Ruta del archivo al que se escribiran los datos
 * @param data: Datos a escribir en el archivo
 * @param options: Opciones de escritura, como la codificacion
*/
let fs = require('fs');

let data = {
    campus: [
        {
            id:1,
            name:"Apolo"
        },
        {
            id:2,
            name:"Artemis"
        },
        {
            id:3,
            name:"Sputnik"
        }
    ]
}
let add = {
    messages: [
        {
            id:1,
            message:"Hola"
        },
        {
            id:2,
            message:"Mundo"
        },
        {
            id:3,
            message:"Chao"
        }
    ]
}

fs.writeFileSync("db/db2.json", JSON.stringify(data));
console.log("Se ha escrito correctamente,\n");
console.log(`Lo que se escribio fue: ${fs.readFileSync("db/db2.json")}`);

fs.appendFileSync("db/db2.json", JSON.stringify(add));
console.log(`Se ha agregado correctamente, el archivo ahora tiene este contenido:\n ${fs.readFileSync("db/db2.json")}`);
/**
 * * El ejemplo tiene fallos por el echo de el formato json
 * ? Revisar
 */


