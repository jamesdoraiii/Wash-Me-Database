var express = require('express');
var router = express.Router();
var sequelize = require('../db');
var Detailer = sequelize.import('../models/detailer');

const { Op } = require('sequelize');


//This router sets up a new detailer profile

router.post('/createdetailerprofile', (req, res) => {
    const newDetailer = {
        userId: req.user.id,
        linkToImgur: req.body.detailer.linkToImgur,
        servicesOffered: req.body.detailer.servicesOffered,
        pricingInformation: req.body.detailer.pricingInformation,
        availability: req.body.detailer.availability,
        willTravel: req.body.detailer.willTravel,
        cities: req.body.detailer.cities,
        state: req.body.detailer.state,
        discoverable: true,
    };
 
    Detailer.create(newDetailer)
        .then(newDetailerProfile => res.status(200).json(newDetailerProfile))
        .catch(err => res.status(500).json({ error: err }))
 })



//This router deletes a detailer profile by id

router.delete('/deletedetailerprofile/:id', (req, res) => {
    Detailer.destroy({ where: { id: req.params.id} })
        .then(deleted => res.status(200).json({
            message: 'profile succesfully deleted'
        }))
        .catch(err => res.status(500).json({ error : err }))
 })



//This router updates a detailer profile so that it is discoverable

router.put('/discoverableon', (req,res) =>{

        Detailer.update({
            discoverable: true
        }, {where: {userId: req.user.id}})
        .then(
            function updateSuccess(updatedLog) { //8
                res.json({
                    
                });            
            },
            function updateError(err){ //9
                res.send(500, err.message);
            }
    
    )});


//This router updates a detailer profile so that it is NOT discoverable

router.put('/discoverableoff', (req,res) =>{

        Detailer.update({
            discoverable: false
        }, {where: {userId: req.user.id}})
        .then(
            function updateSuccess(updatedLog) { //8
                res.json({
                    
                });            
            },
            function updateError(err){ //9
                res.send(500, err.message);
            }
    
    )});


//This router updates the information in a specific detailer profile

router.put('/updateprofile', function(req, res) {

    var linkToImgur = req.body.detailer.linkToImgur;
    var servicesOffered =  req.body.detailer.servicesOffered;
    var pricingInformation =  req.body.detailer.pricingInformation;
    var availability =  req.body.detailer.availability;
    var willTravel = req.body.detailer.willTravel;
    var cities = req.body.detailer.cities;
    var state = req.body.detailer.state;

    Detailer.update({

        linkToImgur: linkToImgur,
        servicesOffered: servicesOffered,
        pricingInformation: pricingInformation,
        availability: availability,
        willTravel: willTravel,
        cities: cities,
        state: state

    },{where: {userId: req.user.id}}
    ).then(
        function updateSuccess() { //8
            res.json({
            });            
        },
        function updateError(err){ //9
            res.send(500, err.message);
        }
    
)});


//find detailers based on location THIS ONE IS GOING TO REQUIRE EXTENSIVE TESTING AND MAYBE SOME ADJUSTMENT TO MAKE SURE THAT THE CITIES IN ARRAY PART WORKS.

router.get('/searchbylocation', (req, res) => {
    Detailer.findAll({ where: {state: req.body.state, cities: req.body.cities}})
       .then(users => res.status(200).json(users))
       .catch(err => res.status(500).json({ error: err }))
});



//pull up one detailers's information using detailerid

router.get('/findspecificdetailer/:id', (req, res) => {
    Detailer.findAll({ where: { id: req.params.id} })
       .then(post => res.status(200).json(post))
       .catch(err => res.status(500).json({ error: err }))
});

module.exports = router;