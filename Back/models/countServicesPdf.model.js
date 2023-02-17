const { db, DataTypes } = require("../utils/database.util");

const CountServicesPdf = db.define(
  "countServicesPdf",
  {
    id: {
      primaryKey: true,
      type: DataTypes.INTEGER,
      autoIncrement: true,
      allowNull: false,
    },
    count: {
      type: DataTypes.INTEGER,
      allowNull: false,
    },
  },
  {
    tableName: "countServicesPdf",
    timestamps: false,
  }
);

module.exports = { CountServicesPdf };
