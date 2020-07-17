function DeviceDao(connection){
    this._connection = connection;
}

DeviceDao.prototype.newDevice = function(device, callback){
    this._connection.query('INSERT INTO device SET ?', device, callback)
}

DeviceDao.prototype.getAll = function (callback) {
    this._connection.query("SELECT * FROM device",callback);
}

module.exports = function(connection){
    return DeviceDao;
};