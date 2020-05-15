const Axios = require('axios');
var express = require('express');
var router = express.Router();
//API KEY 7PAMNZKPHD66LW9D

router.get('/', async function (req, res, next) {
    const symbol = "JPM"
    const result = await Axios.get(
        `https://www.alphavantage.co/query?function=TIME_SERIES_INTRADAY&${symbol}=JPM&interval=5min&apikey=7PAMNZKPHD66LW9D`
    );
    console.log(result.data["Time Series(Daily"])
    res.json({
        date: new Date().toISOString(),
    })
});

module.exports = router;
