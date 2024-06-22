const Pool = require("pg").Pool;
const pool = new Pool({
  user: "postgres",
  host: "localhost",
  database: "crudapp",
  password: "postgres",
  port: 5432,
});
//exporting data base connection for controller
module.exports = pool;
