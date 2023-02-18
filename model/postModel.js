const mongoose = require('mongoose')

const Schema = mongoose.Schema

const postSchema = new Schema({
    title:{type: String},
    note:{type: String},
})


const post = mongoose.model('posts', postSchema)

module.exports = post