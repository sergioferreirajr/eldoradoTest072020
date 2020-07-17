let env = require("env-var");
module.exports.DB_USER = env("DB_USER").required().asString();
module.exports.DB_PASS = env("DB_PASS").required().asString();
module.exports.DB_HOST = env("DB_HOST").required().asString();
module.exports.DB_PORT = env("DB_PORT").required().asPositiveInt();
module.exports.DB_NAME = env("DB_NAME").required().asString();
module.exports.SERVER_PORT = env("SERVER_PORT").required().asPositiveInt();
module.exports.SERVER_HOST = env("SERVER_HOST").required().asString();