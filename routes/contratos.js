const express = require('express');
const router = express.Router();
const contratosController = require('../controllers/contratosController');

router.get('/', contratosController.getAllContratos);
router.post('/', contratosController.createContrato);
router.put('/:id', contratosController.updateContrato);
router.delete('/:id', contratosController.deleteContrato);

module.exports = router;
