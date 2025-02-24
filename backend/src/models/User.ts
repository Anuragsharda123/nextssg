import { Model, DataTypes } from "sequelize";
import sequelize from "../config/db";

class User extends Model {
    public id!: number;
    public name!: string;
    public email!: string;
    public password!: string;
}

User.init({
    id: {
        type: DataTypes.INTEGER, // Correcting Integer type to INTEGER
        autoIncrement: true,
        primaryKey: true
    },
    name: {
        type: DataTypes.STRING(255), // Correcting String type to STRING
        allowNull: false
    },
    email: {
        type: DataTypes.STRING(255), // Correcting String type to STRING
        allowNull: false
    },
    password: {
        type: DataTypes.STRING(255), // Correcting String type to STRING
        allowNull: false
    }
},{
    sequelize, // Using your sequelize instance
    modelName: 'User',
    paranoid: true
});

export default User;
