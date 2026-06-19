const express = require('express');
const router = express.Router();
const produtoController = require('../controllers/produtoController');

router.get('/produtos', produtoController.listar);
router.post('/produtos', produtoController.criar);
router.get('/produtos/:id', produtoController.buscarPorId);
router.put('/produtos/:id', produtoController.atualizar);
router.delete('/produtos/:id', produtoController.deletar);

module.exports = router;