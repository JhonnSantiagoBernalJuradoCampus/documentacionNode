// Require fs
/**
 * * fs.writeFile(file,data, options, callback):
 * ? Escribe datos de un archivo de forma asincrona
 * @param file: Ruta del archivo al que se escribiran los datos
 * @param data: Datos a escribir en el archivo
 * @param options: Opciones de escritura, como la codificacion{
 * @param callback: Función de devolución de llamada que recibe err (error) cuando
se completa la escritura.
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

fs.writeFile("db/db.json",JSON.stringify(data), (err)=>{
    if (err){
        console.log(err);
    }
    else {
        console.log("File written succesfully\n");
        console.log("The file has this contents:");
        console.log(fs.readFileSync("db/db.json", "utf-8"));
    }
})


