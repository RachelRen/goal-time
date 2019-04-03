const express = require('express');
let Goal = express.Router();

// 获取保单列表
Goal.get('/list', (req, res) => {
    res.send({
        code: 200,
        msg: 'success',
        data: [{
                id: "1",
                type: "icon-reading",
                theme: "",
                name: "测试"
            },{
                id: "2",
                type: "icon-learning",
                theme: "",
                name: "跑步"
            }
        ],
    });
});

Goal.post('/add', (req, res) => {
    res.send({
        code: 200,
        msg: 'success',
        data: {
            id: "4",
            type: "icon-learning",
            name: "跑步4343"
        },
    });
});

module.exports = Goal;



