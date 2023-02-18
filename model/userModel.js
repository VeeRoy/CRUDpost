const mongoose = require('mongoose')
const Schema = mongoose.Schema

const ID = Schema.ObjectId

const userSchema = new Schema({
    id: ID,
    name: { type: String, required: true },
    email: { type: String, required: true, unique: true },
    password: { type: String, required: true },
})
  

const user = mongoose.model('users', userSchema)

module.exports = user

