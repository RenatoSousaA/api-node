// console.log(`Meu ambiente: ${process.env.NODE_ENV}`) // Pegar variavel de ambiente

// Express
const express = require('express');

// Firebase
// const firebase = require('firebase');
// const firebaseConfig = require('./config/firebase');
// const firebaseApp = firebase.initializeApp(firebaseConfig);
// const db = firebaseApp.firestore();

// FOLDERS
const createToken = require('./utils/createToken');
const verifyJWT = require('./middlewares/verifyToken');

// Body Parser
const bodyParser = require('body-parser');

// APP
const app = express();

const UsersController = require('./controllers/Users');

app.use(bodyParser.json());

app.post('/auth', (req, res) => {
    db.collection('users')
        .where('email', '==', req.body.email)
        .where('password', '==', req.body.password)
        .get()
        .then(users => {
            if (users.docs.length === 0) {
                return res.status(401).send({
                    message: 'Unauthorized'
                })
            }
            // const user = users.docs.map(user => ({
            //     id: user.id,
            //     ...user.data()
            // }));
            const [{ id }] = users.docs;
            res.json({ token: createToken({ id }) })
        })
        .catch(err => {
            res.sendStatus(500);
            console.log(err);
        })
})


app.get('/users/:id', /* verifyJWT, */ UsersController.get);

app.get('/users', (req, res, next) => {
    db.collection('users').get()
        .then(users => {
            res.json(users.docs.map(user => ({
                id: user.id,
                ...user.data()
            })));
        })
        .catch(err => {
            res.sendStatus(500);
            console.log(err);
        })
})

const port = process.env.PORT || 3000;

app.listen(port, () => {
    console.log(`Escutando a porta: ${port}`) // Pegar variavel de ambiente
})