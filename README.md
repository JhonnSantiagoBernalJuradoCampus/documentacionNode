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