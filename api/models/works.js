'use strict';
module.exports = (sequelize, DataTypes) => {
  const Works = sequelize.define('Works', {
    name: DataTypes.STRING,
    date_premiere: DataTypes.DATEONLY,
    date_ending: DataTypes.DATEONLY,
    status: DataTypes.STRING,
    description: DataTypes.TEXT
  }, {});
  Works.associate = function(models) {
    // Associações são definidas aqui
    Works.hasMany(models.InterfaceActorCompanyWorks, {
      foreignKey: 'work_id'
    });
  };
  return Works;
};