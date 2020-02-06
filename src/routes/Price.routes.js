const express = require('express');
const PriceRouter = express();
const axios = require('axios');

PriceRouter.use(express.json());

PriceRouter.get('/eth', async (req, res) => {    
     const price = await axios.get('https://api.coingecko.com/api/v3/coins/ethereum')
      .catch(function (error) {
        res.send("something went wrong");
      })
    
      res.status(200).send({
            usd_price: price.data.market_data.current_price.usd
      });
    return;

});

PriceRouter.get('/bat', async (req, res) => {    
    const price = await axios.get('https://api.coingecko.com/api/v3/coins/ethereum/contract/0x0d8775f648430679a709e98d2b0cb6250d2887ef')
     .catch(function (error) {
       console.log(error);
     })
   
     res.status(200).send({
           usd_price: price.data.market_data.current_price.usd
     });
   return;

});






module.exports = PriceRouter;
