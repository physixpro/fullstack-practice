const express = require('express')
const mongoose = require('mongoose')
const cors = require('cors')
const app = express()
const ObjectID = require('mongodb').ObjectID
app.use(express.json())
app.use(express.urlencoded({extended:true}))
app.use(cors())

mongoose.connect('mongodb+srv://data:1234@cluster0.qvhok.mongodb.net/Test?retryWrites=true&w=majority', {useUnifiedTopology:true, useNewUrlParser:true})

const db = mongoose.connection

db.on('error', console.error.bind(console, 'connection error'))
db.once('open', function callback () {
    console.log('database is up and running')
})


app.post('/information', async(req,res) => {
    const info = req.body
    const x = await db.collection('information').insertOne(info)
    console.log(info)
    res.json('information posted successfully')
})

app.get('/information', async (req,res) => {
    const information = await db.collection('information').find({}).toArray()
    res.json(information)
})

const port = process.env.PORT || 3001
app.listen (port, () => console.log(`server is running on port ${port}...`))