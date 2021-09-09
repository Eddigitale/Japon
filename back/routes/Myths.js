var express = require('express');
var router = express.Router();
var Task = require('../models/Myths');

router.get('/:id?', function (req, res) {
    if (req.params.id) {
        Task.getMythById(req.params.id, function (err, rows) {
            if (err) {
                res.json(err);
            } else {
                res.json(rows);
            }
        });
    } else {
        Task.getAllMyths(function (err, rows) {
            if (err) {
                res.json(err);
            } else {
                res.json(rows);
            }
        });
    }
});
module.exports = router;