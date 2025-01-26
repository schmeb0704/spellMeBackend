require('dotenv').config()
const express = require('express')
const app = express()
const port = process.env.PORT || 3000
const wordRouter = require('./routes/words')
const mongoConnect = require('./db/connect')
const cors = require('cors')

const allowedOrigins = [
  'http://localhost:5173', // Frontend dev environment URL
  'https://spellme.netlify.app/',
]

const corsOptions = {
  origin: function (origin, callback) {
    if (!origin || allowedOrigins.includes(origin)) {
      callback(null, true)
    } else {
      callback(new Error('Not allowed by CORS'))
    }
  },
}

app.use(cors(corsOptions)) 

app.use(express.json())

app.get('/', (req, res) => {
  res.status(200).json({ message: 'huh' })
})
app.use('/words', wordRouter)

app.listen(port, async () => {
  try {
    await mongoConnect(process.env.MONGO_URI)
    console.log(`app is listening to port ${port}`)
  } catch {
    console.error('something went wrong')
  }
})
