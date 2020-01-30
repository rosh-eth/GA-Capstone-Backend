require('./mongo');
const express = require('express');
const app = express();
const port = 4000;

const trees = require('./src/models/Tree.model');

app.get('/', (req, res) => res.send('Hello World'));
app.listen(port, () => console.log(`Listening on port ${port}`));
