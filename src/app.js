const express = require('express');
const cors = require('cors'); // Importa o CORS
const connectDB = require('./config/database');
const produtoRoutes = require('./routes/produtoRoutes');
require('dotenv').config();

const app = express();

//Conecta ao MongoDB
connectDB();

app.use(cors()); // Libera o acesso para o Frontend
app.use(express.json());

//Rotas da API
app.use('/api', produtoRoutes);

//Inicialização
const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
    console.log(`✅ Servidor rodando na porta ${PORT}`);
});