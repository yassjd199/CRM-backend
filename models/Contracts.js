const { Model, DataTypes } = require('sequelize');
const sequelize = require('../config/database'); // Adjust path as needed
const Client = require('./Client'); // Adjust path as needed

class Contract extends Model {}

Contract.init({
    id: {
        type: DataTypes.INTEGER,
        autoIncrement: true,
        primaryKey: true,
    },
    clientId: {
        type: DataTypes.INTEGER,
        references: {
            model: Client,
            key: 'id',
        },
        allowNull: false,
    },
    contractNumber: {
        type: DataTypes.STRING,
        unique: true,
        allowNull: false,
    },
    insuranceCompany: {
        type: DataTypes.STRING,
        allowNull: false,
    },
    coverageStartDate: {
        type: DataTypes.DATEONLY,
        allowNull: false,
    },
    coverageEndDate: {
        type: DataTypes.DATEONLY,
        allowNull: false,
    },
    premiumAmount: {
        type: DataTypes.DECIMAL(10, 2),
        allowNull: false,
    },
    coverageAmount: {
        type: DataTypes.DECIMAL(10, 2),
        allowNull: false,
    },
    franchiseAmount: {
        type: DataTypes.DECIMAL(10, 2),
        allowNull: false,
    },
}, {
    sequelize, // Pass the sequelize instance
    modelName: 'Contract', // Model name
    tableName: 'contracts', // Table name
    timestamps: true,
});

module.exports = Contract;
