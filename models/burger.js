const orm = require('../config/orm.js');

var burger = {
	selectAll: function(callback){
		orm.selectAll('burgers', function(res){
			callback(res);
		});
	},
	insertOne: function(callback){
		// orm.insertOne('burgers', function(res){

		// });

	},
	updateOne: function(callback){

	}



};



module.exports = burger;