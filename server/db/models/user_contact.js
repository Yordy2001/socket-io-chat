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
            // user_contacts.belongsToMany(models.Users,{
            //     through: 'friends_tel'
            // })
        }
    };
    user_contacts.init({
        friends_tel: DataTypes.STRING  
    }, {
        sequelize,
        modelName: 'user_contacts',
    });
    return user_contacts;
};
