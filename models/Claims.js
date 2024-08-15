const { Model, DataTypes } = require('sequelize');
const sequelize = require('../config/database'); // Adjust path as needed
const Client = require('./Client'); // Adjust path as needed
const Contract = require('./Contracts'); // Adjust path as needed

class Claim extends Model {}

Claim.init({
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
    contractId: {
        type: DataTypes.INTEGER,
        references: {
            model: Contract,
            key: 'id',
        },
        allowNull: false,
    },
    claimNumber: {
        type: DataTypes.STRING,
        unique: true,
        allowNull: false,
    },
    claimDate: {
        type: DataTypes.DATEONLY,
        allowNull: false,
    },
    claimType: {
        type: DataTypes.STRING,
        allowNull: true,
    },
    damageAmount: {
        type: DataTypes.DECIMAL(10, 2),
        allowNull: false,
    },
    status: {
        type: DataTypes.STRING,
        allowNull: false,
    },
}, {
    sequelize, // Pass the sequelize instance
    modelName: 'Claim', // Model name
    tableName: 'claims', // Table name
    timestamps: true,
});

module.exports = Claim;
