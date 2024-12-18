require('dotenv').config();
const { Sequelize } = require('sequelize');

const sequelize = new Sequelize(
    process.env.DB_NAME,
    process.env.DB_USER,
    process.env.DB_PASSWORD,
    {
        host: process.env.DB_HOST,
        port: process.env.DB_PORT,
        dialect: 'postgres',
    }
);

sequelize.authenticate()
    .then(() => {
        console.log('Conexão bem sucedida!');
    })
    .catch(err => {
        console.error('Sem conexão com o banco motivo:', err);
    });

module.exports = sequelize;
