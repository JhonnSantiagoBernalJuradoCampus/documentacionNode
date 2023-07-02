// Require fs
/**
 * * fs.writeFileSync(file,data, options):
 * ? Escribe datos de un archivo de forma sincronica bloqueante
 * @param file: Ruta del archivo al que se escribiran los datos
 * @param data: Datos a escribir en el archivo
 * @param options: Opciones de escritura, como la codificacion
 */
let fs = require('fs');

data = {
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

fs.writeFileSync("db/db.json",JSON.stringify(data))
console.log("File written succesfully\n");
console.log("The file has this contents:");
console.log(fs.readFileSync("db/db.json", "utf-8"));



