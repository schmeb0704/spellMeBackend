class WordRepository {
  constructor(model) {
    this.model = model
  }

  async getAllWords() {
    return this.model.find({}).lean()
  }

  async getRandomWord(level) {
    const convertedToNum = +level
    console.log(convertedToNum)

    try {
      const count = await this.model.countDocuments({
        difficulty: convertedToNum,
      })
      if (count === 0) return null

      const random = Math.floor(Math.random() * count)
      const word = await this.model
        .findOne({ difficulty: convertedToNum })
        .skip(random)
      console.log(word)

      return word
    } catch (error) {
      console.error('Error fetching random document:', error)
      throw error
    }
  }

  async createWord(data) {
    const word = new this.model(data)
    await word.save()
    return word
  }

}

module.exports = WordRepository
