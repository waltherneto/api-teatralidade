'use strict';
module.exports = (sequelize, DataTypes) => {
  const Actors = sequelize.define('Actors', {
    name: DataTypes.STRING,
    date_birth: DataTypes.DATEONLY,
    city_birth: DataTypes.STRING,
    state_birth: DataTypes.STRING,
    mini_bio: DataTypes.TEXT
  }, {});
  Actors.associate = function(models) {
    // Associações são definidas aqui
    Actors.hasMany(models.ActorMedias, {
      foreignKey: 'actor_id'
    });
    Actors.hasMany(models.InterfaceActorCompanies, {
      foreignKey: 'actor_id'
    });
  };
  return Actors;
};