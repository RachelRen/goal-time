const express = require('express');
let Common = express.Router();

// 获取保单列表
Common.get('/icons', (req, res) => {
    res.send({
        code: 200,
        msg: 'success',
        data: [{
                id: "1",
                type: "icon-reading",
            },{
                id: "2",
                type: "icon-learning",
            },{
                id: "3",
                type:"icon-exercise"
            }
        ],
    });
});


module.exports = Common;



