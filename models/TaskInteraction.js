const { Model, DataTypes } = require('sequelize');
const sequelize = require('../config/database'); // Adjust path as needed

class TaskInteraction extends Model {}

TaskInteraction.init({
    taskId: {
        type: DataTypes.INTEGER,
        references: {
            model: 'tasks', // Table name in the database
            key: 'id',
        },
        allowNull: false,
    },
    interactionId: {
        type: DataTypes.INTEGER,
        references: {
            model: 'interactions', // Table name in the database
            key: 'id',
        },
        allowNull: false,
    },
}, {
    sequelize, // Pass the sequelize instance
    modelName: 'TaskInteraction', // Model name
    tableName: 'task_interactions', // Table name
    timestamps: false,
});

module.exports = TaskInteraction;
