require('./mongo');
const express = require('express');
const app = express();
const port = process.env.PORT || 4000;
const treeRouter = require('./src/routes/Tree.routes');
const PriceRouter = require('./src/routes/Price.routes');
// const treeController = require('./src/controller/Price.controller');
const treeModel = require('./src/models/Tree.model');

app.use(express.static('frontend'));

app.use('/tree', treeRouter);
app.use('/price', PriceRouter);

app.listen(port, () => console.log(`Listening on port ${port}`));
