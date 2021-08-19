const express = require('express')
var fs = require('fs');
const app = express()
const port = 3000

app.use(express.static(__dirname)); 
app.get('/', (req, res) => {
    res.sendFile(__dirname + "/index.html");
})

app.listen(port, () => {
  console.log(`node js calculator server listening at http://localhost:${port}`)
})

