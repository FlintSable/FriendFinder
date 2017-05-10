const orm = require('../config/orm.js');

var burger = {
	selectAll: function(callback){ 
		// function to selet all data from db table burgers
		orm.selectAll('burgers', function(res){
			callback(res);
		});
	},
	insertOne: function(column, name, callback){
		orm.insertOne('burgers', column, name, function(res){
			// callback is passed as parameter burger.insertOne is called in controller
			callback(res);
		});

	},
	updateOne: function(table, column, id, callback){
		orm.updateOne('burgers', column, id, function(res){
			callback(res);
		});

	},
	deleteOne: function(table, id, callback){
		orm.deleteOne('burgers', id, function(res){
			callback(res);
		});
	}
	
};



module.exports = burger;