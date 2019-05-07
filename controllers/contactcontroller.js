var express = require('express');
var router = express.Router();
var sequelize = require('../db');
var Contact = sequelize.import('../models/contact');


//This router creates a new contact.

router.post('/create', (req, res) => {
    const newContact = {
        userId: req.user.id,
        detailerId: req.body.detailerId,
        message: req.body.message
    };

    Contact.create(newContact)
        .then(newContact => res.status(200).json(newContact))
        .catch(err => res.status(500).json({ error: err }))
});

router.get('/findusercontacts', (req, res) => {
    Contact.findAll({ where: { userId: req.user.id} })
       .then(reviews => res.status(200).json(reviews))
       .catch(err => res.status(500).json({ error: err }))
});

router.get('/finddetailercontacts', (req, res) => {
    Contact.findAll({ where: { detailerId: req.user.id} })
       .then(reviews => res.status(200).json(reviews))
       .catch(err => res.status(500).json({ error: err }))
});


module.exports = router;