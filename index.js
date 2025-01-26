require('dotenv').config()
const express = require('express')
const app = express()
const port = process.env.PORT || 3000
const wordRouter = require('./routes/words')
const mongoConnect = require('./db/connect')

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
