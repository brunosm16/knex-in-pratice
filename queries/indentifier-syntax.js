const knex = require("../config/mysql.js");

const asyncFn = require("../utils/async-wrapper.js");

const knexQuery = knex({ addrs: "address" }).select({
  addrsDistrict: "addrs.district",
}).first();

asyncFn(knexQuery, () => knex.destroy());
