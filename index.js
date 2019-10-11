// console.log(`Meu ambiente: ${process.env.NODE_ENV}`) // Pegar variavel de ambiente

// Express
const express = require('express');

// Firebase
const firebase = require('firebase');
const firebaseConfig = require('./config/firebase');
const firebaseApp = firebase.initializeApp(firebaseConfig);
const db = firebaseApp.firestore();
// APP
const app = express();

app.get('/users/:id', (req, res, next) => {
    const id = req.params.id;
    db.collection('users').doc(id).get()
        .then(user => {
            if (!user.exists) {
                return res.sendStatus(204)
            }

            res.json(user.data())
        })
        .catch(err => {
            res.sendStatus(500);
            console.log(err);
        })
})

app.get('/users', (req, res, next) => {
    db.collection('users').get()
        .then(users => {
            let allUser = [];
            users.forEach(user => {
                allUser.push(user.data());
            });
            res.json(allUser);
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