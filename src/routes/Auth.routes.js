const express = require('express');
const AuthRouter = express();
const axios = require('axios');

AuthRouter.use(express.json());

AuthRouter.post('/login', async (req, res) => {    
     req.session.username = req.body.username;
     req.session.password = req.body.password;
     console.log(req.session);
     
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
