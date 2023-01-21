'use strict';
module.exports = (sequelize, DataTypes) => {
  const InterfaceActorCompanies = sequelize.define('InterfaceActorCompanies', {
    status: DataTypes.STRING
  }, {});
  InterfaceActorCompanies.associate = function(models) {
    // Associações são definidas aqui
    InterfaceActorCompanies.belongsTo(models.Actors, {
      foreignKey: 'actor_id'
    });
    InterfaceActorCompanies.belongsTo(models.Companies, {
      foreignKey: 'company_id'
    });
  };
  return InterfaceActorCompanies;
};