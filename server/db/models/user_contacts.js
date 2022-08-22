'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class user_contacts extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      user_contacts.hasMany(models.User)
    }
  };
  user_contacts.init({
    friendsID: DataTypes.STRING,
  }, {
    sequelize,
    freezeTableName: true,
    modelName: 'user_contacts',
  });
  return user_contacts;
};
