const express = require('express');
const PriceRouter = express();
const axios = require('axios');


async function getPrice() {
    try {
      const response = await axios.get('https://api.coingecko.com/api/v3/coins/ethereum');
      console.log(response);
    } catch (error) {
      console.error(error);
    }
  }