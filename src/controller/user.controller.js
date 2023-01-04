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

const User = sequelize.define("user", {
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

sequelize.sync().then(() => {
    console.log('User table created successfully!');

    User.create({
        username: "Clean Code",
        password: "Robert Cecil Martin",
        email: "2021-12-14",
        role: "2021-12-14"
    }).then(res => {
        console.log(res)
    }).catch((error) => {
        console.error('Failed to create a new record : ', error);
    });

}).catch((error) => {
    console.error('Unable to create table : ', error);
});

sequelize.sync().then(() => {

    User.findAll().then(res => {
        console.log(res)
    }).catch((error) => {
        console.error('Failed to retrieve data : ', error);
    });

}).catch((error) => {
    console.error('Unable to create table : ', error);
});

sequelize.sync().then(() => {

    User.findOne({
        where: {
            id : "1"
        }
    }).then(res => {
        console.log(res)
    }).catch((error) => {
        console.error('Failed to retrieve data : ', error);
    });

}).catch((error) => {
    console.error('Unable to create table : ', error);
});

sequelize.sync().then(() => {

    User.destroy({
        where: {
            id: 2
        }
    }).then(() => {
        console.log("Successfully deleted record.")
    }).catch((error) => {
        console.error('Failed to delete record : ', error);
    });

}).catch((error) => {
    console.error('Unable to create table : ', error);
});
