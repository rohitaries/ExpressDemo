var express = require('express');
var router = express.Router();


router.get('/', function(req, res) {
  console.log('default route is called');
  res.render('index');
});



router.get('/info', function(req, res) {
  res.json({
      names: ['Khozema', 'Rohit']
  });
});


  router.get('/details', function(req ,res){
    res.json({
      'name' : 'Rohit',
      'batch' : 'Meanstack',
      'city' : 'kalyan'
    });
  });


module.exports = router;
