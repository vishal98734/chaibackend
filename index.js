require('dotenv').config()

const express = require('express')
const app = express()
const port = 3000

app.get('/', (req, res) => {
  res.send('Hello World!')
})

app.get('/facebook', (req, res) =>{
   res.send("vishal singh")
})

app.get('/login',(req, res) => {
    res.send('<h1>please login at chai aur code')
})

app.get('/youtube',(req, res) =>{
   res.send('<h2> Chai or code </h2>')
})

app.listen(process.env.port, () => {
  console.log(`Example app listening on port ${port}`)
})