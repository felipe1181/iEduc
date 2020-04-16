require('dotenv').config();

const isTestEnvironment = process.env.NODE_ENV === 'test';

const config = {
    env: process.env.NODE_ENV,
    port: process.env.APP_PORT,
    apiVersion: process.env.APP_VERSION,
    jwtSecret: process.env.APP_JWT,
    postgres: {
        db: isTestEnvironment ? process.env.POSTGRES_DATABASE_TEST : process.env.POSTGRES_DATABASE,
        port: process.env.POSTGRES_PORT,
        host: process.env.POSTGRES_HOST,
        user: process.env.POSTGRES_USERNAME,
        passwd: process.env.POSTGRES_PASSWORD,
        ssl: process.env.POSTGRES_UNIQUE_NAME_SSL,
        ssl_ca_cert: process.env.POSTGRES_UNIQUE_NAME_CERT_CA,
    },
};

module.exports = config;


