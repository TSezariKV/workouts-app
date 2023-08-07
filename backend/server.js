const express = require('express')
const cors = require('cors')
const mongoose = require('mongoose')
const Workout = require('./models/workout')

require('dotenv').config()

const app = express()

//connect to database
mongoose.connect(process.env.dbURI)
    .then(() => {
        // listen for requests
        app.listen(process.env.PORT, () => {
            console.log(`listening for requests on port ${process.env.PORT}`)
        })
    })

// middleware
app.use(cors())
app.use(express.json())

// routes
app.get('/api', (req, res) => {
    Workout.find({})
        .then(result => {
            res.json(result)
        })
})