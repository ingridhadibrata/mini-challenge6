const express = require('express')
const app = express()
const { User } = require('./models')
const port = 3000

app.set('view engine', 'ejs');
app.use(express.urlencoded({
    extended:false
}))

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

app.get('/users/delete/:id', (req, res) => {
    User.destroy({ where: {id: req.params.id} })
    .then(()=> {
        res.send('User Game has been deleted')
    })
})

app.get('/users/update/:id', (req, res) => {
    User.findOne({ where: {id: req.params.id} })
    .then((user)=> {
        res.render('user/update', {
            user
        })
    })
})

app.post('/users/update/:id', (req, res) => {
    User.update({
        username: req.body.username,
        password: req.body.password
    },
    { where: { id: req.params.id } }
    )
    .then(() => {
        res.send('User Game has been updated')
    })
})


app.listen(port, () => {
    console.log("It Worked!");
});