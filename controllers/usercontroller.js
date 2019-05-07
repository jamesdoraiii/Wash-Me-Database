var express = require('express')
var router = express.Router()      
var sequelize = require('../db');
var User = sequelize.import('../models/user');
var bcrypt = require('bcryptjs'); 
var jwt = require('jsonwebtoken'); 

//This router creates a new user
router.post('/createuser', function (req, res) {


  var username = req.body.user.username;
  var pass = req.body.user.pass;
  var emailAddress = req.body.user.emailAddress;
  var fName = req.body.user.fName;
  var lName = req.body.user.lName;
  

  User.create({
    username: username,
    passwordhash: bcrypt.hashSync(pass, 10),
    emailAddress: emailAddress,
    fName: fName,
    lName: lName,
    isDetailer: false,
    isAdmin: false

  }).then(
    function createSuccess(user) {

      var token = jwt.sign({id: user.id}, "this is the secret", {expiresIn: 60*60*24});

      res.json({
        user: user,
        message: 'created',
        sessionToken: token 
      });
    },
    function createError(err) {
      res.send(500, err.message);
    }
  );
});


//This router signs a user in
router.post('/signin', function (req, res) {
    User.findOne({ where: { username: req.body.user.username } }).then(
        function (user) {
            if (user) {
                bcrypt.compare(req.body.user.pass, user.passwordhash, function (err, matches) {
                    
                    if (matches) {
                      
                      var token = jwt.sign({id: user.id}, "this is a secret", {expiresIn: 60*60*24 });
                      res.json({  
                          user: user,
                          message: "successfully authenticated",
                          sessionToken: token
                      });
                  }else { 
                      res.status(502).send({ error: "you failed, yo" });
                  }
              });
              
            } else { 
                res.status(500).send({ error: "failed to authenticate" });
            }
        },
        function (err) {
            res.status(501).send({ error: "you failed, yo" });
        }
    );
});

//This router sets isDetailer to true

router.put('/isdetaileron', (req,res) =>{

  User.update({
    isDetailer: true
  }, {where: {userId: req.user.id}})
  .then(
      function updateSuccess(updatedLog) { //8
          res.json({
            message: 'set to detailer'
          });            
      },
      function updateError(err){ //9
          res.send(500, err.message);
      }

)});


//This router sets isDetailer to false

router.put('/isdetaileroff', (req,res) =>{

  User.update({
    isDetailer: false
  }, {where: {userId: req.user.id}})
  .then(
      function updateSuccess(updatedLog) { //8
          res.json({
            message: 'set profile to not detailer'
          });            
      },
      function updateError(err){ //9
          res.send(500, err.message);
      }

)});




module.exports = router;