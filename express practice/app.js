var express = require('express');
var app = express();
app.get('/',function(req,res)
{
res.send('Hello World!');
});
app.get('/matthew',function(req,res)
{
res.send('Hello Matthew');
});
var server=app.listen(3000,function() {});