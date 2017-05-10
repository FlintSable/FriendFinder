const connection = require('../config/connection');
// the connection obejct is required from connection object in the config folder in the connection.js file


var orm = {
    selectAll: function(tableInput, cb) {
        var queryString = "SELECT * FROM " + tableInput + ";";
        connection.query(queryString, function(err, result) {
            if (err) {
                throw err;
            }
            cb(result);
        });
    },
    insertOne: function(table, cols, vals, cb) {
        var queryString = ' INSERT INTO ' + table + ' (' + cols + ') ' + 'VALUES("' + [vals] + '")';
        console.log(queryString);

        connection.query(queryString, vals, function(err, result) {
            if (err) throw err;
            cb(result);
        });
    },

    updateOne: function(table, col_name, burger_id, cb) {
        var queryString = 'UPDATE ' + table + ' SET ' + col_name + '=1' + " WHERE id=" + burger_id;
        console.log(queryString);
        connection.query(queryString, function(err, result) {
            if (err) throw err;
            cb(result);
        });

    },
    deleteOne: function(table, burger_id, cb){
        var queryString = 'DELETE FROM ' + table + ' WHERE id = ' + burger_id;
        console.log(queryString);
        connection.query(queryString, function(err, result){
            if(err) throw err;
            cb(result);
        });
    }
};


module.exports = orm;
// this makes the orm object avalible for require in the controller file
