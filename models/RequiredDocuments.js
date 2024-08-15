const { Model, DataTypes } = require('sequelize');
const sequelize = require('../config/database'); // Adjust path as needed

class RequiredDocument extends Model {}

RequiredDocument.init({
    id: {
        type: DataTypes.INTEGER,
        autoIncrement: true,
        primaryKey: true,
    },
    contractType: {
        type: DataTypes.STRING,
        allowNull: false,
    },
    requiredDocumentName: {
        type: DataTypes.STRING,
        allowNull: false,
    },
}, {
    sequelize, // Pass the sequelize instance
    modelName: 'RequiredDocument', // Model name
    tableName: 'required_documents', // Table name
    timestamps: true,
});

module.exports = RequiredDocument;
