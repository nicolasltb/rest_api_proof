/**
 * Main application.
 * @author Nicolas Lopes <nicolasltb123@gmail.com>
 */
import express from 'express';
import bodyParser from 'body-parser';
import homeRoute from './routes/homepage.js';
import torRoute from './routes/get_tor.js';
import postIpRoute from './routes/post_ip.js';
import torFilteredRoute from './routes/get_tor_filtered.js';
import {run_DB} from './utils/db_config.js';

const PORT = 5000;
const app = express();

run_DB();

app.use(bodyParser.json());
app.use('/', homeRoute);
app.use('/get_tor', torRoute);
app.use('/post_ip', postIpRoute);
app.use('/get_tor_filtered', torFilteredRoute);
app.use('/css', express.static('public/stylesheets'));

app.listen(PORT, () => console.log(`Server running on: http://localhost:${PORT}`));