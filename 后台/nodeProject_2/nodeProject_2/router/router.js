var request = require("request");

exports.logQuery = function (req,res) {
    res.header("Access-Control-Allow-Origin", "*");
    res.header("Access-Control-Allow-Headers", "Content-Type,Content-Length, Authorization, Accept,X-Requested-With");
        //接受参数
        var type = req.query.type;
        var postid = req.query.postid;
        //参数数据
           var data = {
                'type':type,
                'postid':456828540012
            };
           console.log(data);
            var url1 ="http://www.kuaidi100.com/query?type="+type+"&postid="+postid;
    request.get({url:url1}, function (err, response, body){
        res.send(response.body)   //发送到前端
        console.log(response.body) 
    })
};