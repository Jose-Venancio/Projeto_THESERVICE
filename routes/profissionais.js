const express = require('express');
const router = express.Router();
const profissionaisController = require('../controllers/profissionaisController');

router.get('/', profissionaisController.getAllProfissionais);
router.post('/', profissionaisController.createProfissional);
router.put('/:id', profissionaisController.updateProfissional);
router.delete('/:id', profissionaisController.deleteProfissional);

module.exports = router;
