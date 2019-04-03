const express = require('express');
let Icon = express.Router();

var test = {
	"success": false,
	"message": "",
	"data": ["icon-reading1", "icon-sleep", "icon-zengjia", "icon-meat", "icon-meal", "icon-morning", "icon-smile", "icon-today", "icon-liebiao", "icon-chart", "icon-smile1", "icon-breakfast", "icon-exercise", "icon-bt_duigou_B", "icon-learning", "icon-reading", "icon-menu", "icon-fullscreen", "icon-information", "icon-edit", "icon-delete", "icon-alarm", "icon-telephone", "icon-sync", "icon-add", "icon-scan", "icon-search", "icon-people", "icon-date", "icon-back", "icon-message", "icon-school", "icon-class", "icon-student", "icon-grade", "icon-guardianshipobject", "icon-alarmlog", "icon-familychat", "icon-aboutus", "icon-report", "icon-trajectorypath", "icon-electronicfence", "icon-location", "icon-devicelog", "icon-healthremark", "icon-contacts", "icon-setup", "icon-sos", "icon-temperature", "icon-sports", "icon-sleep1", "icon-man", "icon-woman", "icon-user_name", "icon-open_eyes", "icon-password", "icon-close_eyes", "icon-presentation", "icon-bloodpressure", "icon-back1", "icon-userstatus", "icon-phone", "icon-electronicfencerem", "icon-lifehelp", "icon-devicestatus", "icon-heartrate", "icon-open", "icon-close", "icon-voice", "icon-more", "icon-healthdata", "icon-back2", "icon-cancel", "icon-send", "icon-fork"],
	"code": ""
}
// 获取保单列表
Icon.get('/list', (req, res) => {
    res.send({
        code: 200,
        msg: 'success',
        data: ["icon-reading1", "icon-sleep", "icon-zengjia", "icon-meat", "icon-meal", "icon-morning", "icon-smile", "icon-today", "icon-liebiao", "icon-chart", "icon-smile1", "icon-breakfast", "icon-exercise", "icon-bt_duigou_B", "icon-learning", "icon-reading", "icon-menu", "icon-fullscreen", "icon-information", "icon-edit", "icon-delete", "icon-alarm", "icon-telephone", "icon-sync", "icon-add", "icon-scan", "icon-search", "icon-people", "icon-date", "icon-back", "icon-message", "icon-school", "icon-class", "icon-student", "icon-grade", "icon-guardianshipobject", "icon-alarmlog", "icon-familychat", "icon-aboutus", "icon-report", "icon-trajectorypath", "icon-electronicfence", "icon-location", "icon-devicelog", "icon-healthremark", "icon-contacts", "icon-setup", "icon-sos", "icon-temperature", "icon-sports", "icon-sleep1", "icon-man", "icon-woman", "icon-user_name", "icon-open_eyes", "icon-password", "icon-close_eyes", "icon-presentation", "icon-bloodpressure", "icon-back1", "icon-userstatus", "icon-phone", "icon-electronicfencerem", "icon-lifehelp", "icon-devicestatus", "icon-heartrate", "icon-open", "icon-close", "icon-voice", "icon-more", "icon-healthdata", "icon-back2", "icon-cancel", "icon-send", "icon-fork"],
    });
});


module.exports = Icon;



