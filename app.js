const express = require('express');
const bodyParser = require('body-parser');
const { Dbconnect } = require('./db')

const userRoute = require('./routes/user')
const postRoute = require('./routes/post')

require('dotenv').config()



const app = express();
const port = 4556
Dbconnect()


app.use(express.json())
app.use(bodyParser.json())

app.use('/user', userRoute)
app.use('/notes', postRoute)

app.get('/', (req, res) => {
    res.send('home page')

})

app.listen(port, ()=>{
    console.log('server started');
});