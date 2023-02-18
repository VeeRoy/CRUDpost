const express = require('express');
const userModel = require('../model/userModel')

const server = express.Router()


// register a new user
server.post('/Register', async (req, res)=>{
    const bod = req.body
    const user = await userModel.create({
        name: bod.name,
        email: bod.email,
        password: bod.password
    })
    res.send(user)
})


//login user
server.post('/login', async (req, res) =>{
    const bod = req.body
    const user = await userModel.find({
        email: bod.email,
        password: bod.password
})
    if(user.length == 0){
        res.send('user not found or password incorrect')
}else{
    res.send('welcome')
}
})

server.get('/getuser', async (req, res) =>{
    const body = req.body
    const user = await userModel.find({
        email: body.email
    })

    res.send(user)
})


module.exports = server





