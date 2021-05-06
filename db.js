import mongoose from 'mongoose'
import 'dotenv/config'

mongoose.connect(
  process.env.DB_URL,
  { useNewUrlParser: true, useUnifiedTopology: true },
  (err) => {
    if (err) return console.log(`Error DB: ${err}`)
    console.log('DB connected')
  }
)
mongoose.set('useCreateIndex', true)
mongoose.set('useFindAndModify', false)
