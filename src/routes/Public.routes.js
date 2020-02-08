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

PublicRouter.post('/user/login', async (req, res) => {
    const user = await UserModel.find({
        email: req.body.email, 
        password: req.body.password
    })
    console.log("user", user);
    if (user.length) {
        req.session.userId = user[0]._id
        res.status(200).send({message: "user login successful"});
    }
        else
            res.status(404).send("could not find user");

});




module.exports = PublicRouter;
