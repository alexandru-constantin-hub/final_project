const express = require('express');
const cors = require('cors');

const objProvincesJsonData = require('./prov.json');
const objRegionsJsonData = require('./regions.json');

const app = express();

const portno = 3050;

app.use(cors());

app.use(express.static(__dirname, {index: "default.html"}));

app.use(express.urlencoded({extended: true}))

app.get('/regions', (req, res) => {
    res.json(objRegionsJsonData);
});

app.get('/provinces', (req, res) => {
    res.json(objProvincesJsonData);
});

const server = app.listen(portno, () => {
    const port = server.address().port;
    console.log(`Server started at http://localhost:${port}`);
})