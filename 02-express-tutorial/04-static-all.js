const express = require('express')
const path = require('path')
const app = express()

//setup static and middleware
app.use(express.static('./public/navbar-app'))

// app.get('/', (req,res)=> {
// res.sendFile(path.resolve(__dirname,'./navbar-app/index.html'))
// })

app.all('*', (req, res) =>{
    res.status(404).send('resource not found')
})


app.listen(2137, () => {
    console.log('server is listening on port 2137...')
})