module.exports = {
  client: "mysql2",
  connection: {
    database: "sakila",
    user: 'brunom',
    password: 'password',
  },
  pool: {
    min: 2,
    max: 10,
  },
  migrations: {
    tableName: "knex_migrations",
  },
};
