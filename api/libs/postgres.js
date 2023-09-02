const { Client } = require('pg');
connectClient();

async function connectClient() {
  const client = new Client({
    host: 'localhost',
    port: 5432,
    user: 'root',
    password: 'root',
    database: 'my-ecommerce-db',
  });

  await client.connect();
  return client;
}

module.exports = connectClient;
