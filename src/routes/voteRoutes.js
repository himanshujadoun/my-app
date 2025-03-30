const express = require('express');
const { vote } = require('../controllers/voteController');

const router = express.Router();
router.post('/vote', vote);

module.exports = router;
