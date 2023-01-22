'use strict';
module.exports = (sequelize, DataTypes) => {
  const ActorMedias = sequelize.define('ActorMedias', {
    type: DataTypes.STRING,
    url: DataTypes.STRING
  }, { paranoid: true });
  ActorMedias.associate = function(models) {
    // Associações são definidas aqui
    ActorMedias.belongsTo(models.Actors, {
      foreignKey: 'actor_id'
    });
  };
  return ActorMedias;
};