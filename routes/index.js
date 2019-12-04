var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: 'Express' });
});
router.post('/', function (req, res) {
  console.log(req.body.title);
  console.log(req.body.description);
  //res.send('Post page');
  res.render('index', { title: 'Express' }, { title2:' express2'});
});

module.exports = router;
