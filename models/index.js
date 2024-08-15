// models/index.js
const sequelize = require('../config/database');
const Client = require('./Client');
const Contract = require('./Contracts');
const Claim = require('./Claims');
const Document = require('./Documents');
const RequiredDocument = require('./RequiredDocuments');
const Interaction = require('./Interactions');
const Task = require('./Task');
const TaskInteraction = require('./TaskInteraction');

// Define relationships
Client.hasMany(Contract, { foreignKey: 'clientId', as: 'contracts' });
Contract.belongsTo(Client, { foreignKey: 'clientId', as: 'client' });

Client.hasMany(Claim, { foreignKey: 'clientId', as: 'claims' });
Claim.belongsTo(Client, { foreignKey: 'clientId', as: 'client' });

Contract.hasMany(Claim, { foreignKey: 'contractId', as: 'claims' });
Claim.belongsTo(Contract, { foreignKey: 'contractId', as: 'contract' });

Contract.hasMany(Document, { foreignKey: 'contractId', as: 'documents' });
Document.belongsTo(Contract, { foreignKey: 'contractId', as: 'contract' });

RequiredDocument.hasMany(Contract, { foreignKey: 'contractType', as: 'contracts' });
Contract.belongsTo(RequiredDocument, { foreignKey: 'contractType', as: 'requiredDocuments' });

Client.hasMany(Interaction, { foreignKey: 'clientId', as: 'interactions' });
Interaction.belongsTo(Client, { foreignKey: 'clientId', as: 'client' });


Task.belongsTo(Interaction, { foreignKey: 'interactionId', as: 'interaction' });
Interaction.hasMany(Task, { foreignKey: 'interactionId', as: 'tasks' });




// Sync database
/*

sequelize.sync({ force: true }).then(() => {
    console.log("Tables Created!")
})

 */
sequelize.sync({ alter: true })
    .then(() => {
        console.log("Database schema updated!");
    })
    .catch(error => {
        console.error("Error updating database schema:", error);
    });


module.exports = {
    Client,
    Contract,
    Claim,
    Document,
    RequiredDocument,
    Interaction,
    Task,
};
