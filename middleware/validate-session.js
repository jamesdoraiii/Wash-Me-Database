var jwt = require('jsonwebtoken');
var sequelize = require('../db');
var User = sequelize.import('../models/user');

module.exports = function(req, res, next) {
    if (req.method == 'OPTIONS') {
        next()
     } else {
        var sessionToken = req.headers.authorization; //1
        console.log(sessionToken) 
        if (!sessionToken) return res.status(403).send({ auth: false, message: 'No token provided.' }); 
        else { 
            jwt.verify(sessionToken, process.env.JWT_SECRET, (err, decoded) => { //5
                //below this basically finds a the user which matches the token, then next sends it to any routers that use this validation.
                if(decoded){
                    User.findOne({where: { id: decoded.id}}).then(user => { //6
                        req.user = user; //7
                        next();
                    },
                    function(){ //8
                        res.status(401).send({error: 'Not authorized'});
                    });
                } else { //9
                    res.status(400).send({error: 'Not authorized'});
                }
            });
        }
    }
}