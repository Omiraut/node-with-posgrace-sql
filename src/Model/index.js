const { Sequelize, DataTypes } = require("sequelize");

const sequelize = new Sequelize("db_student", "postgres", "postgres", {
  host: "localhost",
  dialect: "postgres",
  pool: { max: 5, min: 0, idle: 10000 },
});
sequelize
  .authenticate()
  .then(() => {
    console.log("Connected Successfully");
  })
  .catch((err) => {
    console.log("err", err);
  });

const db = {};
db.Sequelize = Sequelize;
db.sequelize = sequelize;

db.users = require("./Users")(sequelize, DataTypes);
db.sequelize
  .sync({ force: true }) //{force: true} inside sync when using test db alternately use {force: true , match /test$/} which checks which database is using text or not
  .then(() => {
    console.log("in Sync");
  })
  .catch((err) => {
    console.log("err", err);
  });
