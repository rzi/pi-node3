var express = require('express');
var router = express.Router();
var html='<p>paragraf</p>';
/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: 'Express' });
});
router.post('/', function (req, res, next) {
  console.log(req.body.title);
  console.log(req.body.description);
  //res.send('Post page');
  res.render('index', { title: 'Express',title2: req.body.description , title3:req.body.title});
});

// // if a callback is specified, the rendered HTML string has to be sent explicitly
// res.render('index', function (err, html) {
//   res.send(html)
// })

// // pass a local variable to the view
// res.render('user', { name: 'Tobi' }, function (err, html) {
//   // ...
// })
module.exports = router;
