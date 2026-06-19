const produtoRepository = require('../repository/produtoRepository');

class ProdutoService {
    async listarProdutos() {
        return await produtoRepository.buscarTodos();
    }

    async criarProduto(dados) {
        if (!dados.nome || !dados.categoria) {
            throw new Error("Nome e Categoria são obrigatórios!");
        }
        return await produtoRepository.salvar(dados);
    }

    async buscarProdutoPorId(id) {
        return await produtoRepository.buscarPorId(id);
    }

    async atualizarProduto(id, dados) {
        return await produtoRepository.atualizar(id, dados);
    }

    async deletarProduto(id) {
        return await produtoRepository.deletar(id);
    }
}

module.exports = new ProdutoService();