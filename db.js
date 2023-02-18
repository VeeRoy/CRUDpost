const mongoose = require('mongoose');

require('dotenv').config()

const DB_URL = process.env.DB_URL

function Dbconnect(){
    mongoose.connect(DB_URL)

    mongoose.connection.on('connected', ()=>{
        console.log('DB connected')
    })

    mongoose.connection.on('error', (err)=>{
        console.log('error connecting')
    })
}

module.exports = { Dbconnect }