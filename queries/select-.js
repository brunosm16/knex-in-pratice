const knex = require("../config/mysql.js");

const asyncFn = require("../utils/async-wrapper.js");

const columns = ["customer_id", "staff_id", "rental_id"];

const knexQuery = knex.select(columns).from("payment");

asyncFn(knexQuery, () => knex.destroy());
