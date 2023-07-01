// Require fs
/**
 * * fs.readFileSync(path, options):
 * ? Devuelve el contenido de un archivo por lo cual se guarda en una variable para poder utilizarlo 
 * @param path: Ruta del archivo
 * @param options: Opciones de lectura, como la codificacion
 */
let fs = require('fs');

//Se utiliza el archivo
const data = fs.readFileSync('demo.txt', 'utf-8');
console.log(data);



