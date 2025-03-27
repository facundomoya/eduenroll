import { DataTypes } from "sequelize";
import {sequelize} from "../database/connect.js";
import User from "./user.model.js";

const Administrator = sequelize.define("Administrator", {
    id: {
        type: DataTypes.INTEGER,
        autoIncrement: true,
        primaryKey: true
    },
    name: {
        type: DataTypes.STRING,
        allowNull: false
    },
    lastname: {
        type: DataTypes.STRING,
        allowNull: false
    },
    email: {
        type: DataTypes.STRING,
        allowNull: false
    },
    age: {
        type: DataTypes.INTEGER,
        allowNull: false
    },
    administratorId: {
        type: DataTypes.INTEGER,
        allowNull: false
    },
}, {
    timestamps: true,
    tableName: "administrator"
});

Administrator.hasOne(User, {
foreignKey: 'id_administrator',
sourceKey: 'id'
});

User.belongsTo(Administrator, {
foreignKey: 'id_administrator',
targetKey: 'id'
});

export default Administrator;
