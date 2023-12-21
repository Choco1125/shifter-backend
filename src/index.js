const express = require('express')
const morgan = require('morgan')
const cors = require('cors')

const { PORT } = require('./settings/app')

const app = express()

app.use(express.json())
app.use(morgan('dev'))
app.use(cors())

app.get('/health', (req, res) => {
  res.status(200).json({ message: 'OK' })
})

app.listen(PORT, () => {
  console.log(`✅ App running on port ${PORT}`)
})
