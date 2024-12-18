const express = require('express');
const router = express.Router();
const avaliacoesController = require('../controllers/avaliacoesController');

router.get('/', avaliacoesController.getAllAvaliacoes);
router.post('/', avaliacoesController.createAvaliacao);
router.put('/:id', avaliacoesController.updateAvaliacao);
router.delete('/:id', avaliacoesController.deleteAvaliacao);

module.exports = router;
