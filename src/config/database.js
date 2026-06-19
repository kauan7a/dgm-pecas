const mongoose = require('mongoose');
require('dotenv').config();

const connectDB = async () => {
    try {
        // Para o Mongoose ler a url do arquivo .env 
        await mongoose.connect(process.env.MONGODB_URI);
        console.log("✅ MongoDB Atlas Conectado com Sucesso!");
    } catch (err) {
        console.error("❌ Erro ao conectar ao MongoDB:", err.message);
        process.exit(1); 
    }
};

module.exports = connectDB;