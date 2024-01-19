'use strict';

// eslint-disable-next-line @typescript-eslint/no-var-requires
const baseModelMigration = require('../models/base-model/base-model.migration');

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface, Sequelize) {
    return await queryInterface.createTable('Products', {
      ...baseModelMigration(Sequelize),
      ownerId: {
        type: Sequelize.INTEGER,
        allowNull: false,
        references: { model: 'Users', key: 'id' },
        onUpdate: 'CASCADE',
        onDelete: 'SET NULL',
      },
      name: {
        type: Sequelize.STRING,
        allowNull: true,
      },
    });
  },

  async down(queryInterface) {
    return await queryInterface.dropTable('Products');
  },
};
