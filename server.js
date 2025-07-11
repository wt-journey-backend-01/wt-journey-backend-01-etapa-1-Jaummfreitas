const express = require('express')

const app = express();
const PORT = 3000;
const path = require('path');
const lanches = require('./public/data/lanches.json');
app.use(express.static(path.join(__dirname, 'public')));
app.use(express.static(path.join(__dirname, 'views', )));
app.use(express.json());
app.use(express.urlencoded({ extended: true }));


app.get('/', (req, res) => {
    res.sendFile(path.join(__dirname, 'views', 'index.html'));
});

app.get('/sugestao', (req, res) => {
    const nome = req.query.nome;
    const ingredientes = req.query.ingredientes;
    res.send(`Obrigado ${nome} pela sugestão dos ingredientes: ${ingredientes}`);
});

app.get('/contato', (req, res) => {
    res.sendFile(path.join(__dirname, 'views', 'contato.html'));
});

app.post('/contato', (req, res) => {
    const nome = req.body.nome;
    const email = req.body.email;
    const assunto = req.body.assunto;
    const mensagem = req.body.mensagem;
    res.send(`Obrigado ${nome} pelo contato! Seu email é ${email}, assunto: ${assunto}, mensagem: ${mensagem}`);
});

app.get('/api/lanches', (req, res) => {
    res.json(lanches);
});

app.listen(PORT, () => {
    console.log(`Servidor da DevBurger rodando em localhost:${PORT}`);
});