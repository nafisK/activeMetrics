/* imports */
var express = require('express')
const mongoose = require('mongoose')
const dotenv = require('dotenv')
const cors = require('cors')

/* routes */
const userRoute = require('./routes/user')
const exerciseRoute = require('./routes/exercise')
const gptRoute = require('./routes/gpt')

/* initializations */

// check if .env file exists
const envConfig = dotenv.config()

if (envConfig.error) throw new Error('⚠️ .env file not found')

// express
var app = express()
var PORT = process.env.PORT || 4000

// Enable JSON body parsing
app.use(express.json())

// Enable URL-encoded data parsing (optional)
app.use(express.urlencoded({ extended: true }))

// Enable CORS
app.use(cors())

// mongoose
mongoose
    .connect(process.env.MONGODB_URI)
    .then(() => {
        console.log('💡Connected to MongoDB Database..')
    })
    .catch(err => console.log('⚠️Error connecting to MongoDB Database..', err))

/* middleware */
const logger = (req, res, next) => {
    const currentDate = new Date()
    const logTime = `${currentDate
        .getHours()
        .toString()
        .padStart(2, '0')}:${currentDate
            .getMinutes()
            .toString()
            .padStart(2, '0')}:${currentDate
                .getSeconds()
                .toString()
                .padStart(2, '0')}`

    console.log(`👉[${logTime}] ${req.method} ${req.url}`)
    next()
}

/* middleware initialization */
app.use(logger)

/* routes */
app.use('/user', userRoute)
app.use('/exercise', exerciseRoute)
app.use('/gpt', gptRoute)

app.use('/', (req, res) => {
    res.send({ error: 'Bad Request. Defaulted to app.use' })
})

/* server */
app.listen(PORT, () => {
    console.log(`\n💡App listening on PORT ${PORT}..`)
})
