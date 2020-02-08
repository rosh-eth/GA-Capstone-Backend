const express = require('express');
const PublicRouter = express();
const axios = require('axios');
const UserModel = require('../models/User.model');

PublicRouter.use(express.json());

PublicRouter.post('/user/create', async (req, res) => {    

    const user =  await UserModel.create({
         email: req.body.email,
         password: req.body.password
     })
     if (user)
            res.status(201).send({ message: "user created, you may now sign in"});
        else
            res.status(500).send("could not create user");

});




module.exports = PublicRouter;
