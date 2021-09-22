const { User } = require('./models')

User.create({
    username: 'ingridhadibrata',
    password: 'qwerty'
})
.then(users => {
    console.log(users)
})