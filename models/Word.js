const mongoose = require('mongoose')

const WordSchema = mongoose.Schema(
  {
    word: {
      type: String,
    },
    difficulty: {
      type: Number,
    },
  },
  {
    timestamps: true,
  }
)

module.exports = mongoose.model('word', WordSchema)
