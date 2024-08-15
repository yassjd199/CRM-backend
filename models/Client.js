const { Model, DataTypes } = require('sequelize');
const sequelize = require('../config/database');

class Client extends Model {}

Client.init({
    id: {
        type: DataTypes.INTEGER,
        autoIncrement: true,
        primaryKey: true,
    },
    firstName: {
        type: DataTypes.STRING,
        allowNull: false,
    },
    lastName: {
        type: DataTypes.STRING,
        allowNull: false,
    },
    dateOfBirth: {
        type: DataTypes.DATEONLY,
        allowNull: false,
    },
    address: {
        type: DataTypes.STRING,
        allowNull: true,
    },
    phoneNumber: {
        type: DataTypes.STRING,
        allowNull: true,
    },
    email: {
        type: DataTypes.STRING,
        allowNull: true,
        validate: {
            isEmail: true,
        },
    },
    profession: {
        type: DataTypes.STRING,
        allowNull: true,
    },
    employer: {
        type: DataTypes.STRING,
        allowNull: true,
    },
    workAddress: {
        type: DataTypes.STRING,
        allowNull: true,
    },
    workPhoneNumber: {
        type: DataTypes.STRING,
        allowNull: true,
    },
    maritalStatus: {
        type: DataTypes.STRING,
        allowNull: true,
    },
    spouseName: {
        type: DataTypes.STRING,
        allowNull: true,
    },
    numberOfChildren: {
        type: DataTypes.INTEGER,
        allowNull: true,
    },
}, {
    sequelize, // Pass the sequelize instance
    modelName: 'Client', // Model name
    tableName: 'clients', // Table name
    timestamps: true,
});

module.exports = Client;
