const express = require('express');
const AssetRouter = express();
const UserModel = require('../models/User.model');

AssetRouter.use(express.json());

AssetRouter.get('/add', async (req, res) => {    

console.log('session AssetRouter', req.session);
res.status(200).send("asset created")
});




module.exports = AssetRouter;
