var express = require('express');
var router = express.Router();
var sequelize = require('../db');
var Contact = sequelize.import('../models/contact');


//This router creates a new contact.

router.post('/create', (req, res) => {
    const newContact = {
        useridofcustomer: req.user.id,
        useridofdetailer: req.body. useridofdetailer,
        message: req.body.message
    };

    Contact.create(newContact)
        .then(newContact => res.status(200).json(newContact))
        .catch(err => res.status(500).json({ error: err }))
});

module.exports = router;