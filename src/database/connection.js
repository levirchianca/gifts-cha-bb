const knex = require("knex");
const dbconfig = require("../../knexfile");

const env = process.env.NODE_ENV || "development";

module.exports = knex(dbconfig[env]);