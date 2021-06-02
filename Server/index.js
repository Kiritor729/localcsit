const express = require('express');
const path = require('path');
const bodyParser = require('body-parser');
const http = require('http');
const https = require('https');
const mssql = require('mssql');

const app = express();

const msconfig = {
    server: '127.0.0.1',
    user: 'sa',
    password: 'root',
    database: 'CSIT',
    port: 1433,
    options: {
        encrypt: false
    },
    pool: {
        min: 0,
        max: 10,
        idleTimeoutMillis: 3000
    }
}

var db = function(sqlstr) {
    return mssql.connect(msconfig).then(function() {
        return mssql.query(sqlstr);
    }).then(function(result) {
        mssql.close();
        return result;
    }).catch(function(error) {
        mssql.close();
    })
}

var addUser = "insert into t_user (openid,money) values ('"+openid+"',"+money+")";
var addOrder = "insert into t_order (userid,orderid,location,store,starttime,endtime,duration,charges,payed,state) values ("+userid+",'"+orderid+"','"+location+"','"+store+"','"+starttime+"','"+endtime+"','"+duration+"',"+charges+","+payed+","+state+")";
var sqlUserinfo = "select * from t_user where openid='" + openid + "'";
var sqlOrderinfo = "select * form t_order whrer userid=" + userid;

db(sqlUserinfo).then(function(Userinfo) {
    console.log(Userinfo);
})
db(sqlOrderinfo).then(function(Orderinfo) {
    console.log(Orderinfo);
})

var session_key='';

app.use(bodyParser.urlencoded());
app.use(bodyParser.json());
app.use(express.static(path.join(__dirname,'public')))
app.get('/first', (req, res) => {
    res.send('Hello Hello');
})
app.get('/responseData', (req, res) => {
    res.send({'openid':'kasudfbgfgknf'});
})
app.get('/weixin', (req, res) => {
    console.log(req.query);
    var data = '';
    var code = req.query.code;
    var appid = 'wx158e50d513269e47';
    var secret = '051bbb143b434150c4073b424e1b1416';
    https.get('https://api.weixin.qq.com/sns/jscode2session?appid=' + appid + '&secret=' + secret + '&js_code=' + code + '&grant_type=authorization_code', (resq) => {
        resq.on('data', (chunk) => {
            data += chunk;
        });
        resq.on('end', () => {
            res.send(JSON.parse(data).openid);
            session_key = JSON.parse(data).session_key;
            console.log(JSON.parse(data));
        });
    }).on('error', (err) => {
        console.log('ERROR: ' + err.message);
    });
    // http.get('http://localhost:3000/wx' ,(res) => {
    //     res.on('data', (chunk) => {
    //         data += chunk;
    //     });
    //     res.on('end', () => {
    //         console.log(JSON.parse(data));
    //     });
    // }).on('error', (err) => {
    //     console.log('ERROR: ' + err.message);
    // });
    // url: 'https://api.weixin.qq.com/sns/jscode2session?appid=' + appid + '&secret=' + secret + '&js_code=' + code+ '&grant_type=authorization_code'
})
app.post('/wxget', (req, res) => {
    console.log(req.body);
})
app.get('/get', (req, res) => {
    res.send(req.query);
})
app.post('/post', (req, res) => {
    res.send(req.body);
})
app.post('/json', (req, res) => {
    res.send(req.body);
})
app.listen(3000);
console.log('服务器启动成功')