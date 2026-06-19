const produtoService = require('../services/produtoService');

class ProdutoController {
    async listar(req, res) {
        try {
            const produtos = await produtoService.listarProdutos();
            res.status(200).json(produtos);
        } catch (error) {
            res.status(500).json({ message: error.message });
        }
    }

    async criar(req, res) {
        try {
            const novoProduto = await produtoService.criarProduto(req.body);
            res.status(201).json(novoProduto);
        } catch (error) {
            res.status(400).json({ message: error.message });
        }
    }

    async buscarPorId(req, res) {
        try {
            const produto = await produtoService.buscarProdutoPorId(req.params.id);
            if (!produto) return res.status(404).json({ message: 'Produto não encontrado' });
            res.status(200).json(produto);
        } catch (error) {
            res.status(500).json({ message: error.message });
        }
    }

    async atualizar(req, res) {
        try {
            const produtoAtualizado = await produtoService.atualizarProduto(req.params.id, req.body);
            if (!produtoAtualizado) return res.status(404).json({ message: 'Produto não encontrado' });
            res.status(200).json(produtoAtualizado);
        } catch (error) {
            res.status(400).json({ message: error.message });
        }
    }

    async deletar(req, res) {
        try {
            const produtoDeletado = await produtoService.deletarProduto(req.params.id);
            if (!produtoDeletado) return res.status(404).json({ message: 'Produto não encontrado' });
            res.status(200).json({ message: 'Produto removido com sucesso!' });
        } catch (error) {
            res.status(500).json({ message: error.message });
        }
    }
}

module.exports = new ProdutoController();