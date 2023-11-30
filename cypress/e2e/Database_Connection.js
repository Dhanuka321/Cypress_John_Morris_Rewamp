const sql = require('mssql');
const config = require('./confug');

async function connectToDatabase() {
  try {
    await sql.connect(config.database);
    console.log('Connected to MSSQL database');
  } catch (err) {
    console.error('Error connecting to MSSQL database:', err);
  }
}

async function closeDatabaseConnection() {
  try {
    await sql.close();
    console.log('Connection to MSSQL database closed');
  } catch (err) {
    console.error('Error closing MSSQL database connection:', err);
  }
}

module.exports = {
  connectToDatabase,
  closeDatabaseConnection,
};