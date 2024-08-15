const { Model, DataTypes } = require('sequelize');
const sequelize = require('../config/database'); // Adjust path as needed
const Contract = require('./Contracts'); // Adjust path as needed

class Document extends Model {}

Document.init({
    id: {
        type: DataTypes.INTEGER,
        autoIncrement: true,
        primaryKey: true,
    },
    contractId: {
        type: DataTypes.INTEGER,
        references: {
            model: Contract,
            key: 'id',
        },
        allowNull: false,
    },
    documentName: {
        type: DataTypes.STRING,
        allowNull: false,
    },
    documentType: {
        type: DataTypes.STRING,
        allowNull: false,
    },
    filePath: {
        type: DataTypes.STRING,
        allowNull: false,
    },
}, {
    sequelize, // Pass the sequelize instance
    modelName: 'Document', // Model name
    tableName: 'documents', // Table name
    timestamps: true,
});

module.exports = Document;
