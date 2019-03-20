const express = require('express');
let Icon = express.Router();

// 获取保单列表
Icon.get('/list', (req, res) => {
    res.send({
        code: 200,
        msg: 'success',
        data: ["icon-reading", "icon-learning"],
    });
});


module.exports = Icon;



