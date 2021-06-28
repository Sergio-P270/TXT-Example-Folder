const express = require('express');

const app = express();

const port = 3200;

app.get('/', function(req,res){
    res.send("hello boys!");
})
app.get('/home', function(req,res){
    console.log(_dirname);
    res.sendFile(_dirname + '/pages/index.html')
})
app.listen(port.function(){
    console.log('listening at port: ' + port)
})