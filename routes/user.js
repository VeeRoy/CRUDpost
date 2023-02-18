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
        email: bod.email
})
    if(user.length == 0){
        res.send('user not found')
}else{
    res.send('welcome')
}
})


module.exports = server





