const path = require('path');
const express = require('express');

const router = express.Router();


router.get('/product-list', (req, res, next) => {
    console.log(req.body);
    res.sendFile(path.join(__dirname,'../','views','shop.html'))
});

module.exports = router;