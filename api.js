const express = require('express')

const app = express();
const port = 8080;

app.get('/', function (req, res) {
    res.status(200).json({ id: 1, message: 'Hello !' })
})

app.use((err, req, res, next) =>
    res.status(500).json({ message: err.message }))

app.listen(port, () => {
    console.log('le serveur fonctionne')
})