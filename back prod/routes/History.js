var express = require('express');
var router = express.Router();
var Task = require('../models/History');

router.get('/:id?', function (req, res) {
    if (req.params.id) {
        Task.getEventById(req.params.id, function (err, rows) {
            if (err) {
                res.json(err);
            } else {
                res.json(rows);
            }
        });
    } else {
        Task.getAllEvents(function (err, rows) {
            if (err) {
                res.json(err);
            } else {
                res.json(rows);
            }
        });
    }
});
module.exports = router;