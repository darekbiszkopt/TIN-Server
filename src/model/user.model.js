const { Sequelize, DataTypes } = require("sequelize");
dbConfig = require('../config/db.config')

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
    console.log('XXConnection has been established successfully.');
}).catch((error) => {
    console.error('XXUnable to connect to the database: ', error);
});

const User = sequelize.define("books", {
    username: {
        type: DataTypes.STRING,
        allowNull: false
    },
    password: {
        type: DataTypes.STRING,
        allowNull: false
    },
    email: {
        type: DataTypes.STRING,
        allowNull: false
    },
    role: {
        type: DataTypes.STRING,
        allowNull: false
    }
});

User.sync().then(() => {
    console.log('User table created successfully!');
}).catch((error) => {
    console.error('Unable to create table : ', error);
});

