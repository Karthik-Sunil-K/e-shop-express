const express = require('express');
const path = require('path');

const router = express.Router();
router.get('/',(req,res,next)=>{
    // console.log('command 2');
    res.sendFile(path.join(__dirname,'../','views','add-product.html'))
})
router.post('/add-product',(req,res,next)=>{
    res.redirect('/product-list');
    console.log(req.body);
});


module.exports = router;