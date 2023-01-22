'use strict';
module.exports = {
  up: (queryInterface, Sequelize) => {
    return queryInterface.addColumn('ActorMedias', 'deletedAt', {
      allowNull: true,
      type: Sequelize.DATE
    });
  },
  down: (queryInterface, Sequelize) => {
    return queryInterface.removeColumn('ActorMedias', 'deletedAt');
  }
};