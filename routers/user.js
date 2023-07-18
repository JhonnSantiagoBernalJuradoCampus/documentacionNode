import mysql from "mysql2";
import dotenv from "dotenv";
import { Router } from "express";
dotenv.config();

const appUser = Router();

appUser.get('/', async (req, res) => {
    const con = mysql.createPool(JSON.parse(process.env.MY_DB));
    con.query(
        /*sql */`SHOW COLUMNS FROM db_campus.tb_information`,
        (err, data, fill) => {
            res.send(data);
        }
    );
})
export default appUser;