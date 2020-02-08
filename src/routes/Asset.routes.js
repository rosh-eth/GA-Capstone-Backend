const express = require('express');
const AssetRouter = express();
const UserModel = require('../models/User.model');

AssetRouter.use(express.json());

AssetRouter.post('/add', async (req, res) => {
    console.log('session AssetRouter', req.session);

    const user = await UserModel.findByIdAndUpdate({
        _id: req.session.userId}, {
        assets: {
            bat: req.body.btc,
            eth: req.body.eth,
            dai: req.body.dai
        }
    }, {new: true});
    console.log('asset', user);
    if (user)
        res.status(201).send({ user });
    else
        res.status(201).send("added asset");



});




module.exports = AssetRouter;
