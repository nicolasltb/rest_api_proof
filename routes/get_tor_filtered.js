/**
 * Route to GET the filtered Tor ip addresses.
 * @author Nicolas Lopes <nicolasltb123@gmail.com>
 */
import express from 'express';
import { get_tor_node_ips, get_tor_relay_ips } from '../utils/get_tor_data.js';
import { retrieve_DB } from '../utils/db_config.js';

const router = express.Router();

router.get('/', async (req, res) => {

    const DB_data = await retrieve_DB();
    const tor_relay_ips = await get_tor_relay_ips();
    const tor_nodes = await get_tor_node_ips();
    
    let array_ips = tor_relay_ips.concat(tor_nodes);

    DB_data.forEach(element => {
        if(array_ips.includes(element.ip_address)) {
            array_ips.splice(array_ips.indexOf(element.ip_address), 1);
        }
    });

    res.send(array_ips);
});

export default router;