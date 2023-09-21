const { Client } = require('pg');
const config = require('../config/config');

const USER = encodeURIComponent(config.dbUser);
const PASSWORD = encodeURIComponent(config.dbPassword);
const URI = `postgres://${USER}:${PASSWORD}@${config.dbHost}:${config.dbPort}/${config.dbName}`;

async function connectClient() {
  const client = new Client({
    connectionString: URI,
  });
  await client.connect();
  return client;
}

module.exports = connectClient;
