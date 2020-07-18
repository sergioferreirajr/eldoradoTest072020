function CategoryDao(connection){
    this._connection = connection;
}

CategoryDao.prototype.newCategory = function(category, categoryName, callback){
    let sqlTxt = 'INSERT INTO category (ID, NAME) VALUES (LAST_INSERT_ID(), ?)';
    let values = [categoryName];
    this._connection.query(sqlTxt, values, callback);
}

CategoryDao.prototype.getAll = function (callback) {
    this._connection.query("SELECT * FROM category",callback);
}

CategoryDao.prototype.findById = function (id,callback) {
    this._connection.query("SELECT * FROM category WHERE ID = ?",[id],callback);
}

CategoryDao.prototype.delete = function (id,callback) {
    this._connection.query("DELETE FROM category WHERE ID = ?",[id],callback);
}

module.exports = function(connection){
    return CategoryDao;
};