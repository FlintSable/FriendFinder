const connection = require('../config/connection');

var orm = {
	selectAll: function(tableInput, callback){
		var queryString = "SELECT * FROM " + tableInput + ";";
		connection.query(queryString, function(err, result){
			if(err){
				throw err;
			}
			callback(result);
			});
	}
	// ,
	// insertOne: fucntion(){

	// },

	// updateOne: function(){

	// 
}


module.exports = orm;