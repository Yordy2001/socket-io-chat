'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class Friends extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {

      Friends.hasMany(models.Users)

      Friends.hasMany(models.Chats)
    }
  };
  Friends.init({
    nickname: DataTypes.STRING,
    tel: DataTypes.INTEGER,
    portada: DataTypes.STRING,
    info: DataTypes.STRING,
  }, {
    sequelize,
    modelName: 'Friends',
  });
  return Friends;
};
