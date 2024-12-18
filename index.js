const express = require('express');
const app = express();
const PORT = 3000;

app.use(express.json());

app.get('/', (req, res) => {
    res.send('API está rodando!');
});

// Importando as rotas
app.use('/usuarios', require('./routes/usuarios'));
app.use('/servicos', require('./routes/servicos'));
app.use('/avaliacoes', require('./routes/avaliacoes'));
app.use('/profissionais', require('./routes/profissionais'));
app.use('/contratos', require('./routes/contratos'));
app.use('/faturas', require('./routes/faturas'));

app.listen(PORT, () => {
    console.log(`Servidor rodando em http://localhost:${PORT}`);
});

module.exports = app;
