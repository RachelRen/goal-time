const express = require('express');
let Punch = express.Router();


Punch.get('/add', (req, res) => {
    res.send({
        code: 200,
        msg: 'success',
        data: {
            updateTime: "2019-01-20",
            count: 4,
            createTime: "2019-01-20",
            id: "1",
            name: "新的"
        },
    });
});

module.exports = Punch;



