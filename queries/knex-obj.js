const knex = require("../config/mysql.js");

const asyncFn = require("../utils/async-wrapper.js");

const knexQuery = knex.select().from("address").timeout(2, { cancel: true });

asyncFn(knexQuery, () => knex.destroy());
