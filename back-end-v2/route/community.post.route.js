const express = require('express');
const router = express.Router();

router.get('/community', (req, res) => {res.send('community')});

module.exports = router;