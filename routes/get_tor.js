/**
 * Route to GET the Tor ip addresses.
 * @author Nicolas Lopes <nicolasltb123@gmail.com>
 */
import express from 'express';
import { get_tor_node_ips, get_tor_relay_ips } from '../utils/get_tor_data.js';

const router = express.Router();

router.get('/', async (req, res) => {

    const tor_relay_ips = await get_tor_relay_ips();
    const tor_nodes = await get_tor_node_ips();

    let array_ips = tor_relay_ips.concat(tor_nodes);

    res.send(array_ips);
});

export default router;