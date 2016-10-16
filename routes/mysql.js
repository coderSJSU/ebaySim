var ejs= require('ejs');//importing module ejs
var mysql = require('mysql');//importing module mysql
function getConnection(){
var connection = mysql.createConnection({
host : 'localhost', //host where mysql server is running
user : 'root', //user for the mysql application
password : 'blitz', //password for the mysql application
database : 'datahub', //database name
port : 3306 //port, it is 3306 by default for mysql
});
return connection;
}


function insertqueryWithParams(callback, sqlQuery, post){
	
	console.log("\nSQL Query::"+post);
	var connection=getConnection();
	var query = connection.query(sqlQuery, post, function(err,rows, result) {
	if(err){
		console.log("ERROR: " + err.message);
		callback(err, rows);
	}
	else
	{ 
	callback(err, rows);
	}
	});
	console.log("\nConnection closed..");
	connection.end();
}

function insertqueryWithParamsReturnData(callback, sqlQuery, post){
	
	console.log("\nSQL Query::"+sqlQuery);
	var connection=getConnection();
	var query = connection.query(sqlQuery, post, function(err,rows, result) {
	if(err){
	console.log("ERROR: " + err.message);
	}
	else
	{ 
	callback(err, rows, post);
	}
	});
	console.log("\nConnection closed..");
	connection.end();
}

	
//fetching the data from the sql server
function fetchData(callback,sqlQuery,key){
	console.log("\nSQL Query::"+sqlQuery+key);
	var connection=getConnection();
	connection.query(sqlQuery, [key], function(err, rows, fields) {
	if(err){
	console.log("ERROR: " + err.message);
	}
	else
	{ // return err or result
	console.log("DB Results:"+rows);
	callback(err, rows);
	}
	});
	console.log("\nConnection closed..");
	connection.end();
	}

function deleteData(callback,sqlQuery,key){
	console.log("\nSQL Query::"+sqlQuery+key);
	var connection=getConnection();
	connection.query(sqlQuery, [key], function(err, rows, fields) {
	if(err){
	console.log("ERROR: " + err.message);
	}
	else
	{ // return err or result
	console.log("DB Results:"+rows);
	callback(err, rows);
	}
	});
	console.log("\nConnection closed..");
	connection.end();
	}

function updateData(callback,sqlQuery,key){
	console.log("\nSQL Query::"+sqlQuery+key);
	var connection=getConnection();
	connection.query(sqlQuery, [key], function(err, rows, fields) {
	if(err){
	console.log("ERROR: " + err.message);
	}
	else
	{ // return err or result
	console.log("DB Results:"+rows);
	callback(err, rows);
	}
	});
	console.log("\nConnection closed..");
	connection.end();
	}

function updateData(sqlQuery,key){
	console.log("\nSQL Query::"+sqlQuery+key);
	var connection=getConnection();
	connection.query(sqlQuery, [key], function(err, rows, fields) {
	if(err){
	console.log("ERROR: " + err.message);
	}
	else
	{ // return err or result
	console.log("DB Results:"+rows);
	}
	});
	console.log("\nConnection closed..");
	connection.end();
	}

exports.updateData= updateData;
exports.deleteData= deleteData;
exports.fetchData=fetchData;
exports.getConnection=getConnection;
exports.insertqueryWithParams=insertqueryWithParams;
exports.insertqueryWithParamsReturnData = insertqueryWithParamsReturnData;