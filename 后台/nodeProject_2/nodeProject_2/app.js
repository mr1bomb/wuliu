var express = require('express');
var app = express();
var router = require("./router/router");

//聊天接口
app.get("/query",router.logQuery);
app.listen('3000');