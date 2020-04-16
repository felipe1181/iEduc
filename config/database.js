// eslint-disable-next-line import/no-unresolved
const config = require('./config');

module.exports = {
    "dialect": "postgres",
    "database": config.postgres.db,
    "username": config.postgres.user,
    "password": config.postgres.passwd,
    "host": config.postgres.host,
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

