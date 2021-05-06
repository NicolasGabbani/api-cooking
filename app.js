import express from 'express'
import bodyParser from 'body-parser'
import cors from 'cors'
import './db.js'
import { router as foodRoutes } from './routes/foodRoutes.js'

const app = express()

app.use(bodyParser.json())
app.use(cors())

app.get('/', (req, res) => {
  res.send('hello there')
})

app.use('/food', foodRoutes)

app.listen(3000, '0.0.0.0', () => console.log('server started'))
