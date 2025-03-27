import { DataTypes } from "sequelize";
import {sequelize} from "../database/connect.js";
import User from "./user.model.js";

const Professor = sequelize.define("Professor", {
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
    professorId: {
        type: DataTypes.INTEGER,
        allowNull: false
    },
}, {
    timestamps: true,
    tableName: "professor"
});

Professor.hasOne(User, {
foreignKey: 'id_professor',
sourceKey: 'id'
});

User.belongsTo(Professor, {
foreignKey: 'id_professor',
targetKey: 'id'
});

export default Professor;
