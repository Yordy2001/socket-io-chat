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

    //   User.hasMany()
    }
  };
  User.init({
    full_name: DataTypes.STRING,
    tel: DataTypes.NUMBER,
    portada: DataTypes.STRING,
    info: DataTypes.STRING,
    friends_tel: DataTypes.NUMBER,
  }, {
    sequelize,
    modelName: 'User',
  });
  return User;
};
