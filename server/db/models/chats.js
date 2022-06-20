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

      // Chats.hasMany(models.Users, {
      //   foreignKey: 'user_message',
      //   targetKey:'user_message'
      // })
      Chats.hasMany(models.Message)
    }
  };
  Chats.init({
  }, {
    sequelize,
    modelName: 'Chats',
  });
  return Chats;
};
