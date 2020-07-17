var mysql  = require('mysql');

function createDBConnection(){
        return mysql.createConnection({
            host: 'localhost',
            user: 'root',
            password: '',
            database: 'eldoradodb'
        });
}

module.exports = function() {
    return createDBConnection;
}
