const { Model, DataTypes } = require('sequelize');
const sequelize = require('../config/database'); // Adjust path as needed
const Client = require('./Client'); // Adjust path as needed

class Interaction extends Model {}

// Initialize Interaction model
Interaction.init({
    id: {
        type: DataTypes.INTEGER,
        autoIncrement: true,
        primaryKey: true,
    },
    clientId: {
        type: DataTypes.INTEGER,
        references: {
            model: 'clients', // Ensure this matches the table name of the Client model
            key: 'id',
        },
        allowNull: false,
    },
    interactionDate: {
        type: DataTypes.DATEONLY,
        allowNull: false,
    },
    interactionType: {
        type: DataTypes.STRING,
        allowNull: false,
    },
    details: {
        type: DataTypes.TEXT,
        allowNull: true,
    },
}, {
    sequelize, // Pass the sequelize instance
    modelName: 'Interaction', // Model name
    tableName: 'interactions', // Table name
    timestamps: true, // Enable timestamps (createdAt, updatedAt)
});



module.exports = Interaction;
