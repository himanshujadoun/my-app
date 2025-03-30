const express = require('express');
const { getParties } = require('../controllers/partyController');

const router = express.Router();
router.get('/getParties', getParties);

module.exports = router;
