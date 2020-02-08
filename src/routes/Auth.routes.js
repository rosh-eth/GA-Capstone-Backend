const express = require('express');
const AuthRouter = express();
const axios = require('axios');
const userModel = require('../models/User.model');

AuthRouter.use(express.json());

AuthRouter.post('/login', async (req, res) => {    
     req.session.username = req.body.username;
     req.session.password = req.body.password;
     console.log(req.session);
     
});

AuthRouter.get('/profile/:userid', async (req, res) => {
  const user = await userModel.find({
    _id: req.params.userid})

    if (user.length) {
      res.status(200).send({user: user[0]});
    }
    else {
      res.status(404).send('not found');
    }
});


AuthRouter.get('/logout', (req, res) => {
    req.session.destroy(function(err){
    
          if(err){
            // do something
          } else {
            res.redirect('/')
          }
    })
  })



module.exports = AuthRouter;
