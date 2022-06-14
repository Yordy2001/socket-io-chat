'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class Chats extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {

      Chats.hasMany(models.Users, {
        foreignKey: 'user_messages'
      })
      Chats.hasMany(models.Friends, {
        foreignKey: 'friends_messages'
      })
    }
  };
  Chats.init({
  }, {
    sequelize,
    modelName: 'Chats',
  });
  return Chats;
};
