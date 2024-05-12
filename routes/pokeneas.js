const express = require('express');
const router = express.Router();
const pokeneasController = require('../controllers/pokeneasController');

router.get('/', pokeneasController.getPokenea);
router.get('/api/pokeneas', pokeneasController.getAllPokeneas);
router.get('/api/pokenea', pokeneasController.getApiPokenea);

module.exports = router;
