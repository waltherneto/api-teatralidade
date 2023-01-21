'use strict';
module.exports = {
  up: (queryInterface, Sequelize) => {
    return queryInterface.createTable('InterfaceActorCompanyWorks', {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER
      },
      work_id: {
        allowNull: false,
        type: Sequelize.INTEGER,
        references: { model: 'Works' , key: 'id' }
      },
      actor_id: {
        type: Sequelize.INTEGER
      },
      company_id: {
        type: Sequelize.INTEGER
      },
      date_start: {
        type: Sequelize.DATEONLY
      },
      date_finish: {
        type: Sequelize.DATEONLY
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
    return queryInterface.dropTable('InterfaceActorCompanyWorks');
  }
};