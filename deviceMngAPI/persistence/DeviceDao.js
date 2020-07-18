function DeviceDao(connection){
    this._connection = connection;
}

DeviceDao.prototype.newDevice = function(device, category_id, color, partNumber, callback){
    let sqlTxt = 'INSERT INTO device (ID, CATEGORY_ID, COLOR, PARTNUMBER) VALUES (LAST_INSERT_ID(), ?, ?, ?)';
    let values = [category_id, color, partNumber];
    this._connection.query(sqlTxt, values, callback)
}

DeviceDao.prototype.getAll = function (callback) {
    this._connection.query("SELECT * FROM device",callback);
}

DeviceDao.prototype.delete = function (id, callback) {
    this._connection.query("DELETE FROM device WHERE ID = ?", [id], callback);
}

module.exports = function(connection){
    return DeviceDao;
};