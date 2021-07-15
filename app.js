const express = require('express')
const path = require('path')

const app = express()

const publicPath = path.resolve(__dirname, './public')
app.use(express.static(publicPath))



app.get('/', (req, res) => {
    let htmlPath = path.resolve(__dirname, './views/home.html')
    res.sendFile(htmlPath)
})

app.listen(process.env.PORT || 3030, () => {
    console.log('Servidor corriendo por puerto 3030');
})