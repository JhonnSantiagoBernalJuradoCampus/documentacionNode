//main.js
const datos = require('./datos.json');
console.log("json: ",datos);
console.log("json id: ", datos.campus.map(res=>res.id).join(' '));
console.log("json name: ",datos.campus.map(res=>res.name).join(' '));
