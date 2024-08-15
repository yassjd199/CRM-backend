const { Model, DataTypes } = require('sequelize');
const sequelize = require('../config/database'); // Adjust path as needed

class Task extends Model {}

// Initialize Task model
Task.init({
    id: {
        type: DataTypes.INTEGER,
        autoIncrement: true,
        primaryKey: true,
    },
    taskDescription: {
        type: DataTypes.STRING,
        allowNull: false,
    },
    dueDate: {
        type: DataTypes.DATEONLY,
        allowNull: true,
    },
    responsiblePerson: {
        type: DataTypes.STRING,
        allowNull: true,
    },
    status: {
        type: DataTypes.STRING,
        allowNull: false,
    },
}, {
    sequelize, // Pass the sequelize instance
    modelName: 'Task', // Model name
    tableName: 'tasks', // Table name
    timestamps: true, // Enable timestamps (createdAt, updatedAt)
});



module.exports = Task;
