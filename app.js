const express = require('express')
const cors = require('cors')

const app = express()
app.use(cors())


app.get('/', (req, res) => {
    const sumCard = req.query.sumCard;
    console.log('sumCarddd', sumCard)
    res.send('Hello World !')
})

app.listen(8000, () => {
    console.log('server start !')
})
