'use strict';
module.exports = {
  up: (queryInterface, Sequelize) => {
    return queryInterface.addColumn('InterfaceActorCompanyWorks', 'deletedAt', {
      allowNull: true,
      type: Sequelize.DATE
    });
  },
  down: (queryInterface, Sequelize) => {
    return queryInterface.removeColumn('InterfaceActorCompanyWorks', 'deletedAt');
  }
};