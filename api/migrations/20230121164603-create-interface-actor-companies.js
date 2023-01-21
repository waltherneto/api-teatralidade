'use strict';
module.exports = {
  up: (queryInterface, Sequelize) => {
    return queryInterface.createTable('InterfaceActorCompanies', {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER
      },
      actor_id: {
        allowNull: false,
        type: Sequelize.INTEGER,
        references: { model: 'Actors' , key: 'id' }
      },
      company_id: {
        allowNull: false,
        type: Sequelize.INTEGER,
        references: { model: 'Companies' , key: 'id' }
      },
      status: {
        type: Sequelize.STRING
      },
      createdAt: {
        allowNull: false,
        type: Sequelize.DATE
      },
      updatedAt: {
        allowNull: false,
        type: Sequelize.DATE
      }
    });
  },
  down: (queryInterface, Sequelize) => {
    return queryInterface.dropTable('InterfaceActorCompanies');
  }
};