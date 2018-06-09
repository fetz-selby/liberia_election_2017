var Sequelize = require('sequelize');

const config = {
    IP : process.env.SERVER_IP || 'http://localhost',
    PORT:process.env.SERVER_PORT || 8005,
    secret : 'thequickfoxjumpedofthelazydog'
}

const sequelize = new Sequelize(process.env.DB_NAME || 'liberia_election', process.env.DB_USER || 'election', process.env.DB_PASSWORD || 'pa55w0rd', {
    host: process.env.DB_HOST || 'localhost',
    //dialect: 'postgres',
    dialect: process.env.DB_DIALECT || 'mysql',
    pool: {
        max: 5,
        min: 0
    }
});

module.exports = {config : config, sequelize : sequelize};

