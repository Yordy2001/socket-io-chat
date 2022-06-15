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

      User.hasMany(models.Chats)
      // User.hasMany(models.user_contacts, {
      //   foreignKey:"friends_tel",
      //   onDelete:'CASCADE'
      // })
      // User.hasMany(models.Friends, {
      //   foreignKey:'tel',
      //   onDelete:'CASCADE'
      // })
    }
  };
  User.init({
    full_name: DataTypes.STRING,
    tel: DataTypes.STRING(12),
    portada: DataTypes.STRING,
    info: DataTypes.STRING,
  }, {
    sequelize,
    modelName: 'User',
  });
  return User;
};
