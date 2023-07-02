// Require fs
/**
 * * fs.appendFile(file,data, options, callback):
 * ? Agrega datos al final de un archivo de forma asincrónica
 * @param file: Ruta del archivo al que se escribiran los datos
 * @param data: Datos a escribir en el archivo
 * @param options: Opciones de escritura, como la codificacion
 * @param callback: Función de devolución de llamada que recibe err (error) cuando
se completa la operación
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

fs.writeFileSync("db/db2.json", JSON.stringify(data))
console.log("Se ha escrito correctamente,\n");
console.log(`Lo que se escribio fue: ${fs.readFileSync("db/db2.json")}`);

fs.appendFile("db/db2.json", JSON.stringify(add),(error)=>{
    if (error){
        console.log(error);
    }
    else{
        console.log(`Se ha agregado correctamente, el archivo ahora tiene este contenido:\n
        ${fs.readFileSync("db/db2.json")}`);
    }
})
/**
 * * El ejemplo tiene fallos por el echo de el formato json
 * ? Revisar
 */


