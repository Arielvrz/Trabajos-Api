require('dotenv').config();
const { Client } = require('pg');

const client = new Client({
  host: process.env.DB_HOST || 'localhost',
  port: Number(process.env.DB_PORT || 5432),
  user: process.env.DB_USER || 'postgres',
  password: process.env.DB_PASS || '',
  database: process.env.DB_NAME || 'apicurso',
});

(async () => {
  try {
    await client.connect();
    console.log('DB test: connected successfully as', process.env.DB_USER || 'postgres');
    const res = await client.query('SELECT current_database(), current_user, inet_server_addr(), inet_server_port()');
    console.log('Server info:', res.rows[0]);
    await client.end();
    process.exit(0);
  } catch (err) {
    console.error('DB test: connection failed');
    console.error(err.message || err);
    process.exit(1);
  }
})();