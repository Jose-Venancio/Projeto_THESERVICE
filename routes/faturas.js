const express = require('express');
const router = express.Router();
const faturasController = require('../controllers/faturasController');

router.get('/', faturasController.getAllFaturas);
router.post('/', faturasController.createFatura);
router.put('/:id', faturasController.updateFatura);
router.delete('/:id', faturasController.deleteFatura);

module.exports = router;
