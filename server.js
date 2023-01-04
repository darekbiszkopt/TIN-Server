dbConfig = require('./src/config/db.config')

const Sequelize = require("sequelize");

// new Sequelize('database', 'username', 'password', { ...
const sequelize = new Sequelize(
    dbConfig.DB,
    dbConfig.USER,
    dbConfig.PASSWORD,
    {
        host: dbConfig.HOST,
        dialect:  dbConfig.dialect,
        port: dbConfig.PORT
    }
);

sequelize.authenticate().then(() => {
    console.log('Connection has been established successfully.');
}).catch((error) => {
    console.error('Unable to connect to the database: ', error);
});
