const mongoose = require('mongoose');

// Definição da tabela dos produtos
const ProdutoSchema = new mongoose.Schema({
    nome: { 
        type: String, 
        required: [true, 'O nome do produto é obrigatório'] 
    },
    categoria: { 
        type: String, 
        required: [true, 'A categoria é obrigatória'] 
    },
    descricao: { 
        type: String 
    },
    preco: { 
        type: String, 
        default: "Sob Consulta" 
    },
    imagem_url: { 
        type: String 
    },
    criadoEm: { 
        type: Date, 
        default: Date.now 
    }
});

// Exportação do módulo para o repository
module.exports = mongoose.model('Produto', ProdutoSchema);