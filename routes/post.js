const express = require('express');
const postModel = require('../model/postModel')
const userModel = require('../model/userModel')

const server = express.Router()



// write a post
server.post('/:userid/write', async (req, res)=>{

    //check if a user exists

    const userId = req.params.userid

    const verifyAdmin = await userModel.find({_id: userId })
    if (verifyAdmin.length == 0) {
        res.status(400).send('you cannot write post')
    
    }else{
    const bod = req.body
    const user = await postModel.create({
        title: bod.title,
        note: bod.note,
    })
    res.send(user)
}
})


// get all your notes
server.get('/allnotes', async (req, res) =>{
    const note = await postModel.find({})
    res.send(note)
})


// get a particular note
server.get('/:title', async (req, res) =>{
    const bod = req.params.title
    const note = await postModel.find({
        title: bod
    })
    res.send(note)
})


// update a note
server.patch('/:userid/:id', async(req, res)=>{
    // check if user exists
    const userId = req.params.userid

    const verifyAdmin = await userModel.find({_id: userId })
    if (verifyAdmin.length == 0) {
        res.status(400).send('you cannot update post')
    
    }else{
    const bod = req.params.id
    const updateInfo = req.body

    let note = await postModel.findByIdAndUpdate(bod, updateInfo)
    note = await postModel.findById(bod)
    res.send(note)
    }
})


//delete a note
server.delete('/:userid/:id', async (req, res) =>{

    // check if user exists
    const userId = req.params.userid

    const verifyAdmin = await userModel.find({_id: userId })
    if (verifyAdmin.length == 0) {
        res.status(400).send('you cannot delete post')
    
    }else{
    const bod = req.params.id
    const note = await postModel.findByIdAndDelete(bod)
    res.send('deletion successful')
    }
})


module.exports = server