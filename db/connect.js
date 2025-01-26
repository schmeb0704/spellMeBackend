const mongoose = require('mongoose')

const mongoConnect = async (dbURL) => {
  try {
    await mongoose.connect(dbURL)
    console.log('successfully connected to Mongo')
  } catch (error) {
    console.error('something went wrong while connecting...', error)
  }
}

module.exports = mongoConnect
