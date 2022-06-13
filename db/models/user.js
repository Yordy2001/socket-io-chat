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

      User.hasMany(models.Chat, {
        foreignKey:'chats',
        onDelete:cascade
      })
      User.hasMany(models.Friends, {
        foreignKey:'friends_tel',
        onDelete:cascade
      })
    }
  };
  User.init({
    full_name: DataTypes.STRING,
    tel: DataTypes.INTEGER,
    portada: DataTypes.STRING,
    info: DataTypes.STRING,
  }, {
    sequelize,
    modelName: 'User',
  });
  return User;
};
