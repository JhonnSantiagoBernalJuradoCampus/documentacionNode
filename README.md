# Express

## Intalacion:
iniciamos el npm : `- npm init -y`
- `npm i -E -D nodemon`
- `npm i -E -D express`

1. el archivo package.json ya debe tener iniciado el nodemon en:
`"dev": "nodemon --quiet ./app.js"`

2. Debes importar express en un archivo app.js:
```js
import express from 'express';
```
3. Ahora vamos a iniciar el servidor Express y configuraremos una ruta llamada `/campus`.
```js
import express from 'express';

const expressApp = express();

expressApp.get('/campus', (req,res)=>{
    res.send("Hello Developer")
});

let config = {
    hostname: "127.100.07.12",
    port: 5510
}
expressApp.listen(config, ()=>{
    console.log(`http://${config.hostname}:${config.port}/campus`)
})
```
4. En la terminal debera poner el comando:
`- npm run dev`

## Parametros y encabezados

-  params : En Express, los params se refieren a los parámetros enviados a través del enrutador en una solicitud HTTP. Los parámetros son partes variables de la URL que permiten capturar valores específicos y utilizarlos en la lógica de la aplicación. En Express, los parámetros se definen en la ruta utilizando dos puntos (:) seguidos de un nombre de variable. Por ejemplo, en la ruta /campus/:idCamper, idCamper es un parámetro que puede tomar diferentes valores en cada solicitud.
- headers: En Express, los "headers" (encabezados) se refieren a la información adicional que se envía junto con una solicitud HTTP o una respuesta HTTP. Los encabezados proporcionan metadatos sobre la solicitud o respuesta, como el tipo de contenido, la codificación, las cookies, la autenticación y otros detalles importantes. En Express, los encabezados se pueden acceder y manipular utilizando el objeto req.headers para las solicitudes entrantes y el objeto res.set() o res.setHeader() para las respuestas salientes.

1. Peticion: 
```js
appExpress.get('/campus/:idCamper', (req, res) => {
    let obj = {
        "Datos de la url": req.params,
        "Encabezado": req.headers
    }
    res.send(JSON.stringify(obj))
})
```