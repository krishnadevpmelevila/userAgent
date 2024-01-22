var express = require('express');
var router = express.Router();
const axios = require('axios');
// dotenv
require('dotenv').config();
/* GET home page. */
router.get('/', async (req, res, next) => {
  const options = {
    method: 'GET',
    url: 'https://user-agent-parser4.p.rapidapi.com/user-agent/useragent.php',
    params: {
      ua: req.headers['user-agent']
    },
    headers: {
      'X-RapidAPI-Key': process.env.API_KEY,
      'X-RapidAPI-Host': 'user-agent-parser4.p.rapidapi.com'
    }
  };

  try {
    const response = await axios.request(options);
    res.render('index', { title: 'Express',data: response.data });


  } catch (error) {
    console.error(error);
  }
});

module.exports = router;
