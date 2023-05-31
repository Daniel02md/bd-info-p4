module.exports = {
    client: 'sqlite3',
    connection: {
        filename: './notasFiscais.db'
    },
    migrations: {
        directory: "./migrations"
    },
    useNullAsDefault: true,
}
