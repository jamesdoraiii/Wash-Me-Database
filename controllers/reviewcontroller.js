var express = require('express');
var router = express.Router();
var sequelize = require('../db');
var Review = sequelize.import('../models/review');


//This router creates a new review

router.post('/create', (req, res) => {
    const newReview = {
        userId: req.user.id,
        detailerId: req.body.detailerId,
        reviewContent: req.body.reviewContent,
        numberOfStars: req.body.numberOfStars
    };
 
    Review.create(newReview)
        .then(review => res.status(200).json(review))
        .catch(err => res.status(500).json({ error: err }))
 })


//This router deletes a review by id

router.delete('/deletereview/:id', (req, res) => {
    Review.destroy({ where: { id: req.params.id} })
        .then(deleted => res.status(200).json({
            message: 'review succesfully deleted'
        }))
        .catch(err => res.status(500).json({ error : err }))
 })


//This router will find all reviews that a user has made

router.get('/finduserreviews', (req, res) => {
    Review.findAll({ where: { userId: req.user.id} })
       .then(reviews => res.status(200).json(reviews))
       .catch(err => res.status(500).json({ error: err }))
});


//This router will find all reviews made about a certain detailer

router.get('/finddetailerreviews/:id', (req, res) => {
    Review.findAll({ where: { detailerId: req.params.id} })
       .then(reviews => res.status(200).json(reviews))
       .catch(err => res.status(500).json({ error: err }))
});

module.exports = router;