'use strict';
module.exports = (sequelize, DataTypes) => {
  const Companies = sequelize.define('Companies', {
    name: DataTypes.STRING,
    city: DataTypes.STRING,
    state: DataTypes.STRING,
    history: DataTypes.TEXT,
    date_foundation: DataTypes.DATEONLY
  }, {});
  Companies.associate = function(models) {
    // Associações são definidas aqui
    Companies.hasMany(models.InterfaceActorCompanies, {
      foreignKey: 'company_id'
    });
  };
  return Companies;
};