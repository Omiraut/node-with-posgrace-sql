const { DataTypes } = require("sequelize");

module.exports = (sequelize, DataTypes) => {
  const Users = sequelize.define(
    "users",
    {
      name: DataTypes.STRING,
      email: {
        type: DataTypes.STRING,
        defaultValue: "example@example.com",
      },
      gender: {
        type: DataTypes.STRING,
      },
    },
    {
      //   tableName: "user_data",
      //   timestamps: false,
      //   createdAT: false,
      //   updatedAt: false,
    }
  );
};
