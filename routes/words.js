const express = require('express')
const router = express.Router()
const WordRepository = require('../repositories/WordRepository')
const Word = require('../models/Word')

const wordRepository = new WordRepository(Word)

router.get('/', async (req, res) => {
  try {
    const words = await wordRepository.getAllWords()
    return res.send(words)
  } catch (error) {
    console.error('something went wrong', error)
  }
})

router.get('/random', async (req, res) => {
  try {
    

    const {difficulty} = req.query
    
    const word = await wordRepository.getRandomWord(difficulty)
    return res.status(200).send(word)
  } catch (error) {
    console.error('something went wrong', error)
  }
})

router.post('/create', async (req, res) => {
  try {
    const newWord = await wordRepository.createWord(
      req.body
    )

    return res.status(200).send(newWord)
  } catch (error) {
    console.error('something went wrong', error)
  }
})

module.exports = router
