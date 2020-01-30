const express = require('express');
const TreeRouter = express();
const treeModel = require('../models/Tree.model');
const treeSeed = require('../models/TreeSeed');

TreeRouter.use(express.json());

TreeRouter.get('/', (req, res) => {
    res.send('Hello World');
});

TreeRouter.get('/:name/leaves/:leaves', (req,res) => {
    res.send(req.params);
})

TreeRouter.post('/post', async (req, res) => {
    
    await treeModel.create(req.body);

    console.log(req.body);
    
    res.send('POST to homepage');
})

module.exports = TreeRouter;
