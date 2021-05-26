/**
 * Route to the main page of the API.
 * @author Nicolas Lopes <nicolasltb123@gmail.com>
 */
import express from 'express';

const router = express.Router();

router.get('/', (req, res) => {
    res.sendFile('templates/homepage.html', { root: './' });
});

export default router;