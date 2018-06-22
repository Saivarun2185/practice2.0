var express = require('express');
var router = express.Router();
var customer = require('../model/booking.model');
/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: 'Express' });
});

router.post('/',function(req,res,next){
  
  var newcustomer = new customer(req.body);
  
  newcustomer.save(
  
  function (err, data) {
  
  if (err) return console.error(err);
  
  console.log("success")
  
  res.send("success")
  }
  )
  });
module.exports = router;
