const orm = require('../config/orm.js');

var burger = {
	selectAll: function(callback){
		orm.selectAll('burgers', function(res){
			callback(res);
		});
	}



}



module.exports = burger;