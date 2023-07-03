import convertirDolaresAEUROS, { convertirDolaresALibras } from "./conversor.js";

import * as readline from 'node:readline/promises';
import { stdin as input, stdout as output} from 'node:process';

const rl = readline.createInterface({input, output});

const answer = await rl.question('Ingresa la cantidad de dolares ');

let euro = convertirDolaresAEUROS(answer);
let libra = convertirDolaresALibras(answer);
console.log(`${answer} Dolares a Euros es: ${euro}`);
console.log(`${answer} Dolares a Libra es: ${libra}`);
rl.close();