var express = require('express');
var router = express.Router();

// Node.js MySQL SELECT FROM query Example
// include mysql module
var mysql = require('mysql');
 
// create a connection variable with the required details
var con = mysql.createConnection({
  host: "pi.cba.pl", // ip address of server running mysql
  user: "Bazapi2019", // user name to your mysql database
  password: "Bazapi2019", // corresponding password
  database: "elunch" // use the specified database
});
 
con.connect(function(error){
  if (error) throw error;
  if(!!error){
    console.log(error);
  }else{
    console.log('Connected!:)');
  }
});  

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: 'Express' });
});

router.post('/', function (req, res, next) {

  var id = req.body.id;
  var myid, mysesa, myname,mysurname,mypassword;
  if (id) {
    // if connection is successful
    con.query("SELECT * FROM spl_users WHERE id = ?", [id], function (err, result, fields) {

    // if any error while executing above query, throw error
     if (err) throw err;
     // if there is no error, you have the result

    myid=result[0].id;

     //res.send('Post page');
    res.render('index', { title: 'Express',
    id: myid ,
    imie:result[0].name ,
    nazwisko:result[0].surname

    });
  });
  }
  else{
    res.send('Parametr ID jest wymagany')
  }
  
  
  
    
  

 
});

module.exports = router;