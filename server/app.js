var express = require('express');
var app = express();// express is method which is initilaised to variable app
var bodyParser = require('body-parser');
var jwt = require('jsonwebtoken');+

app.use(bodyParser.urlencoded({extended : true}))
app.use(bodyParser.json());//converts our all request or interpret into json format

var route = express.Router();
route.get('/',function(req,res){
    res.json({message  : "Hello world"})
})
route.post('/',{},function(req,res){
    if(req.body.name=="mohan" && req.body.age==21){
        var token = jwt.sign(req.body, '67676');
        console.log('The oken is' ,token)
        res.json({message:token})
    }
    else{
        res.json({message : "Incorrect login"})
    }
    console.log('The data  is',req.body)
})

app.use('/api',route)
app.listen(3000,function(){
    console.log('Server starts')
})

