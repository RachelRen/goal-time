const express = require('express');

const app = express();

const Common = require('./common');
const Goal = require('./goal');
const Icon = require('./icon');

// 全部允许跨域请求
app.all('*', (req, res, next) => {
    res.header('Access-Control-Allow-Origin', '*');
    res.header('Access-Control-Allow-Headers', 'Content-Type, Content-Length, Authorization, Accept, X-Requested-With , yourHeaderFeild');
    res.header('Access-Control-Allow-Methods', 'PUT, POST, GET, DELETE, OPTIONS');

    if (req.method == 'OPTIONS') {
        res.send(200); /* 让options请求快速返回 */
    } else {
        next();
    }
});


app.use('/api/common', Common);
app.use('/api/goal', Goal);
app.use('/api/icon', Icon);
var server = app.listen(10234, () => {
    const host = server.address().address;
    const port = server.address().port;
    console.log('Mock server listening at http://localhost:10234');
});

