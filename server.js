
var express=require('express');

var app=express();
app.use(express.static(__dirname));

var bodyParser=require('body-parser');
app.use(bodyParser.urlencoded({extended:false}));
app.use(bodyParser.json())

// var mysql=require('mySQL');
// var connection=mysql.createConnection({
// 	host:'localhost',
// 	databace:'mybase',
// 	user:'root',
// 	password:'root'
// });
// connection.connect(function(err){
// 	if(err) {
// 		console.error(err.stack);
// 		return;
// 	}
// 	console.log('connect-'+connection.threadId)
// })
// app.get('/getdata',function(req,res){
// 	connection.query('select * from t2',
// 		function(err,data)){
// 		console.log(data);
// 		res.send(data)
// 	}
// })

app.listen(process.env.PORT||8080);
console.log('Run Server!');