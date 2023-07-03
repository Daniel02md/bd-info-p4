module.exports = {
  development: {
    client: 'sqlite3',
    connection: {
      filename: './SCA.db'
    },
    migrations: {
        directory: "./migrations"
    },
    useNullAsDefault: true
    }
};