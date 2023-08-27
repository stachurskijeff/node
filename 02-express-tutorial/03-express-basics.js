const express = require('express')
const app = express()


app.get('/', (req, res) => {
    console.log('user hit the resource')
res.status(200).send('Home Page')
})

app.get('/about', (req, res)=> {
    console.log('user hit the about')
    res.status(200).send('About Page')
})

app.all('*', (req, res)=> {
    res.status(404).send('<h1>resource not found</h1')
})

app.listen(2137, () => {
    console.log('server is listening on port 2137...')
})