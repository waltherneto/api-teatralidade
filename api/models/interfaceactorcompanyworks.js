'use strict';
module.exports = (sequelize, DataTypes) => {
  const InterfaceActorCompanyWorks = sequelize.define('InterfaceActorCompanyWorks', {
    actor_id: DataTypes.INTEGER,
    company_id: DataTypes.INTEGER,
    date_start: DataTypes.DATEONLY,
    date_finish: DataTypes.DATEONLY
  }, {});
  InterfaceActorCompanyWorks.associate = function(models) {
    // Associações são definidas aqui
    InterfaceActorCompanyWorks.belongsTo(models.Works, {
      foreignKey: 'work_id'
    });
  };
  return InterfaceActorCompanyWorks;
};