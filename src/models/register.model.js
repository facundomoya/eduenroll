import { DataTypes } from "sequelize";
import { sequelize } from "../database/connect.js";

const Register = sequelize.define(
  "Register",
  {
    id: {
      type: DataTypes.INTEGER,
      autoIncrement: true,
      primaryKey: true,
    },
    name: {
      type: DataTypes.STRING,
      allowNull: false,
    }
  },
  {
    timestamps: true,
    tableName: "register",
  }
);

export default Register;