'use strict';
module.exports = {
    up: async (queryInterface, Sequelize) => {
        await queryInterface.createTable('user_contacts', {
            id: {
                allowNull: false,
                autoIncrement: true,
                primaryKey: true,
                type: Sequelize.INTEGER
            },
            friendsId: {
                type: Sequelize.INTEGER
            },
        });
    },
    down: async (queryInterface, Sequelize) => {
        await queryInterface.dropTable('user_contacts');
    }
};
