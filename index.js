require('./mongo');
const express = require('express');
const app = express();
const port = process.env.PORT || 4000;
const treeRouter = require('./src/routes/Tree.routes');
const treeController = require('./src/controller/Tree.controller');
const treeModel = require('./src/models/Tree.model');

app.use('/tree', treeRouter);

app.listen(port, () => console.log(`Listening on port ${port}`));
