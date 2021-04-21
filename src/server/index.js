const dotenv = require('dotenv');
dotenv.config();
var path = require('path')
const express = require('express')
var bodyParser = require('body-parser')
var cors = require('cors')
const app = express()
const nodeFetch = require("node-fetch")
const api_key = process.env.API_KEY

app.use(bodyParser.json())
// to use url encoded values
app.use(bodyParser.urlencoded({
  extended: true
}))

app.use(cors())
app.use(express.static('dist'))

console.log(__dirname)

app.get('/', function (req, res) {
     res.sendFile('dist/index.html')
})

app.listen(8082, function () {
    console.log('Example app listening on port 8082!')
})

app.get('/test', function (req, res) {
    res.send(mockAPIResponse)
})

app.post('/evaluate', function (req, res) {
    var url = req.body.url;
    const result = nodeFetch(`https://api.meaningcloud.com/sentiment-2.1?key=${api_key}&lang=en&of=json&url=${url}`, {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json',
        }
        })
        .then(response => response.json())
        .then(response => {
           return response
        })

        result.then(function(response) {
            res.send(response)
         })
})
