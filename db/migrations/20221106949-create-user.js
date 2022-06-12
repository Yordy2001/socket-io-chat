'use strict';
module.exports = {
    up: async (queryInterface, Sequelize) => {
        await queryInterface.createTable('user', {
            id: {
                allowNull: false,
                autoIncrement: true,
                primaryKey: true,
                type: Sequelize.INTEGER
            },
            full_name: {
                type: Sequelize.STRING,
                allowNull: false
            },
            tel: {
                type: Sequelize.INTEGER,
                allowNull: false
            },
            portada: Sequelize.STRING,
            info: Sequelize.STRING,
            friends_tel: Sequelize.INTEGER,

            createdAt: {
                allowNull: false,
                type: Sequelize.DATE
            },
            updatedAt: {
                allowNull: false,
                type: Sequelize.DATE
            }
        });
    },
    down: async (queryInterface, Sequelize) => {
        await queryInterface.dropTable('User');
    }
};