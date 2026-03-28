const express = require('express');
const router = express.Router();

// Placeholder for ratings array
let ratings = [];

// Get all ratings
router.get('/', (req, res) => {
    res.json(ratings);
});

// Create a new rating
router.post('/', (req, res) => {
    const newRating = req.body;
    ratings.push(newRating);
    res.status(201).json(newRating);
});

// Get a specific rating
router.get('/:id', (req, res) => {
    const rating = ratings.find(r => r.id === parseInt(req.params.id));
    if (!rating) return res.status(404).send('Rating not found');
    res.json(rating);
});

// Update a specific rating
router.put('/:id', (req, res) => {
    const ratingIndex = ratings.findIndex(r => r.id === parseInt(req.params.id));
    if (ratingIndex === -1) return res.status(404).send('Rating not found');
    ratings[ratingIndex] = req.body;
    res.json(ratings[ratingIndex]);
});

// Delete a specific rating
router.delete('/:id', (req, res) => {
    const ratingIndex = ratings.findIndex(r => r.id === parseInt(req.params.id));
    if (ratingIndex === -1) return res.status(404).send('Rating not found');
    ratings.splice(ratingIndex, 1);
    res.status(204).send();
});

module.exports = router;