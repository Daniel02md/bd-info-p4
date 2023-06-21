module.exports = {
  client: 'sqlite3',
  connection: {
      filename: 'database.db'
  },
  migrations: {
      directory: "./migrations"
  },
  seeds: {
      directory: "./seeds"
  },
  useNullAsDefault: false,
}