const express = require('express');
const router = express.Router();

router.get('https://server/review/:reviewid', (req, res, next) => {
    res.status(200).json({
        message: 'Handling GET requests'
    });
});

router.get('https://server/review/:n/:stars', (req, res, next) => {
    res.status(200).json({
        message: 'Handling GET requests'
    });
});

router.get('https://server/review/:n/:from_date/:to_date', (req, res, next) => {
    res.status(200).json({
        message: 'Handling GET requests'
    });
});

router.post('https://server/review/:reviewid', (req, res, next) => {
    res.status(201).json({
        message: 'Handling POST requests'
    });
});


router.put('https://server/review/:reviewid', (req, res, next) => {
    res.status(200).json({
        message: 'Updated!'
    });
});

router.delete('https://server/review/:reviewid', (req, res, next) => {
    res.status(200).json({
        message: 'Deleted!'
    });
});

module.exports = router;