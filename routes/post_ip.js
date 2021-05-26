/**
 * Route to POST an ip address into the database.
 * @author Nicolas Lopes <nicolasltb123@gmail.com>
 */
import express from 'express';
import { insert_DB } from '../utils/db_config.js';

const router = express.Router();

router.post('/', (req, res) => {
    
    if (req.body.length > 1) {
        let ip = [];
        req.body.forEach(element => {
            ip.push(element);
        });
        insert_DB(ip);
        res.send(`${ip.length} ips cadastrados com sucesso`);
    } else {
        let ip = req.body;
        insert_DB(ip);
        res.send(`Ip: ${req.body.ip_address} cadastrado com sucesso`);
    }

});

export default router;