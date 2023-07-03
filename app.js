//app.js
/**
 * ?Para importar los modulos de las dos maneras que exportamos son:
 * @var {export default} = trainer
 * @var {export} = {coordinadores, salones}
 */
import trainers, {coordinadores, salones} from './main.js';
console.log(`Trainers: ${trainers().join(", ")}`);
console.log(`Salones:`, salones());
console.log(`Coodinadores: `, coordinadores());