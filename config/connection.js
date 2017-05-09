
var mysql = require('mysql');
var connection;
if(process.env.JAWS_DB_URL){
    connection = mysql.createConnection(process.env.JAWS_DB_URL);
}else{
    var connection = mysql.createConnection({
    port: 3306,
    host: 'localhost',
    user: 'root',
    password: 'password',
    database: 'burgers_db'
});

}

connection.connect(function(err) {
    if (err) {
        console.error('error connecting: ' + err.stack);
        return;
    }
    console.log('connected as id ' + connection.threadId);
});
//export to other files. like server.
module.exports = connection;