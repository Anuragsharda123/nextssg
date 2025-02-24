"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const sequelize_1 = require("sequelize");
const db_1 = __importDefault(require("../config/db"));
class User extends sequelize_1.Model {
}
User.init({
    id: {
        type: sequelize_1.DataTypes.INTEGER, // Correcting Integer type to INTEGER
        autoIncrement: true,
        primaryKey: true
    },
    name: {
        type: sequelize_1.DataTypes.STRING(255), // Correcting String type to STRING
        allowNull: false
    },
    email: {
        type: sequelize_1.DataTypes.STRING(255), // Correcting String type to STRING
        allowNull: false
    },
    password: {
        type: sequelize_1.DataTypes.STRING(255), // Correcting String type to STRING
        allowNull: false
    }
}, {
    sequelize: db_1.default, // Using your sequelize instance
    modelName: 'User',
    paranoid: true
});
exports.default = User;
