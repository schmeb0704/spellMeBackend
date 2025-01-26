class WordRepository {
  constructor(model) {
    this.model = model
  }

  async getAllWords() {
    return this.model.find({}).lean()
  }

  async getRandomWord(level) {
    const convertedToNum = +level
    const word = this.model.aggregate([
      {$match: {difficulty: convertedToNum}},
      {$sample: {size: 1}}
    ])
    return word
  }

  async createWord(data) {
    const word = new this.model(data)
    await word.save()
    return word
  }

}

module.exports = WordRepository
