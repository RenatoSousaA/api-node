// console.log(`Meu ambiente: ${process.env.NODE_ENV}`) // Pegar variavel de ambiente

const express = require('express')
const app = express();

app.get('/usuarios', (req, res, next) => {
    //console.log(req.query.id);
    //res.sendStatus(200);
    console.log('ENTREI NA ROTA USUARIOS')
    res.json({
        success: true
    })
})

const port = process.env.port || 3000;

app.listen(port, () => {
    console.log(`Escutando a porta: ${port}`) // Pegar variavel de ambiente
})