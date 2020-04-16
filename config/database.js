// eslint-disable-next-line import/no-unresolved
require('dotenv').config();

module.exports = {
    "dialect": "postgres",
    "database": process.env.POSTGRES_DATABASE,
    "username": process.env.POSTGRES_USERNAME,
    "password": process.env.POSTGRES_PASSWORD,
    "host": process.env.POSTGRES_HOST,
    "pool": {
        max: 5,
        min: 0,
        idle: 10000,
    },
    define: {
        timestamps: true,
        underscored: true,
    },
};

