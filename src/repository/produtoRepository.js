const Produto = require('../models/produtoModel');

class ProdutoRepository {
    async buscarTodos() {
        return await Produto.find();
    }
    async salvar(dados) {
        const novo = new Produto(dados);
        return await novo.save();
    }
    async buscarPorId(id) {
        return await Produto.findById(id);
    }
    async atualizar(id, dados) {
        return await Produto.findByIdAndUpdate(id, dados, { new: true });
    }
    async deletar(id) {
        return await Produto.findByIdAndDelete(id);
    }
}

module.exports = new ProdutoRepository();