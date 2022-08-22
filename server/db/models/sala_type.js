'use strict';
const {
    Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
    class sala_type extends Model {
        /**
         * Helper method for defining associations.
         * This method is not a part of Sequelize lifecycle.
         * The `models/index` file will call this method automatically.
         */
        static associate(models) {
            sala_type.hasMany(models.Sala)
        }
    
    };
    sala_type.init({
        nombre: DataTypes.STRING  
    }, {
        sequelize,
        freezeTableName: true,
        modelName: 'sala_type',
    });
    return sala_type;
};
