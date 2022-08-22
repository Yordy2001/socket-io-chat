'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class User extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      User.hasMany(models.sala_usuario)
      User.hasMany(models.Message)
      User.hasMany(models.user_contacts)

    }
  };
  User.init({
    full_name: DataTypes.STRING,
    tel: DataTypes.STRING,
    password: DataTypes.STRING,
    portada: DataTypes.STRING,
    info: DataTypes.STRING,
  }, {
    sequelize,
    freezeTableName: true,
    modelName: 'User',
  });
  return User;
};
