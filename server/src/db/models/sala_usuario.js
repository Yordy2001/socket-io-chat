'use strict';
const {
    Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
    class sala_usuario extends Model {
        /**
         * Helper method for defining associations.
         * This method is not a part of Sequelize lifecycle.
         * The `models/index` file will call this method automatically.
         */
        static associate(models) {
        }
    };
    sala_usuario.init({
    }, {
        sequelize,
        freezeTableName: true,
        modelName: 'sala_usuario',
    });
    return sala_usuario;
};
