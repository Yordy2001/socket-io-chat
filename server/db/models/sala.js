'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class Sala extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // Sala.hasMany(models.sala_type)
      Sala.hasMany(models.Message)

    }
  };
  Sala.init({
  }, {
    sequelize,
    freezeTableName: true,
    modelName: 'Sala',
  });
  return Sala;
};
