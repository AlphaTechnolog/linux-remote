const express = require('express')
const dotenv = require('dotenv')
const path = require('path')
const cors = require('cors')
const morgan = require('morgan')

dotenv.config({
  path: path.join(__dirname, '..', '.env'),
})

const app = express()

app.use(express.json())
app.use(cors())
app.use(morgan('dev'))

app.use('/playerctrl', require('./routes/playerctrl'))
app.use(require('./errors/notfound'))

app.listen(process.env.PORT, () => {
  console.log('Server is listening on port', process.env.PORT)
})
