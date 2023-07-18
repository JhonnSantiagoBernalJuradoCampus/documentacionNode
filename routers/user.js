import mysql from "mysql2";
import dotenv from "dotenv";
import { Router } from "express";
dotenv.config();
const appUser = Router();

/**
 * Buscar datos
 * @var {/:id}
 * * Parametro opcional si no lo envias por defecto buscara todos los datos
 */
appUser.get('/:id?', async (req, res) => {
    const con = mysql.createPool(JSON.parse(process.env.MY_DB));
    let sql = (req.params.id)
        ? [`SELECT * FROM tb_information WHERE ?`, req.params]
        : [`SELECT * FROM tb_information`];
    con.query(...sql,
        (err, data, fill) => {
            res.send(data);
        }
    );
})
export default appUser;