const axios = require('axios');

async function limparBanco() {
    try {
        const response = await axios.get('http://localhost:3000/api/produtos');
        const produtos = response.data;

        if (produtos.length === 0) {
            console.log("oooops! O banco já parece estar vazio no servidor.");
            return;
        }

        console.log(`⚠️  Tentando apagar ${produtos.length} itens...`);

        for (const p of produtos) {
            const res = await axios.delete(`http://localhost:3000/api/produtos/${p._id}`);
            if(res.status === 200 || res.status === 204) {
                console.log(`✅ Sucesso ao apagar: ${p.nome}`);
            }
        }
        
        console.log('\n✨ Limpeza concluída no Back-end!');
    } catch (error) {
        console.error('❌ Erro crítico:', error.response ? error.response.data : error.message);
    }
}

limparBanco();