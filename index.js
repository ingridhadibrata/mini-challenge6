const express = require('express')
const app = express()
const { User } = require('./models')
const port = 3000

app.use(express.json())

app.get('/users', (req,res) => {
    User.findAll()
    .then((users) => {
        res.json(users);
    })
})

app.post('/users', (req,res) => {
    User.create({
        username: req.body.username,
        password: req.body.password
    })
    .then(() => {
        res.send('New user has been made')
    })
})
app.listen(port, () => {
    console.log("It Worked!");
});