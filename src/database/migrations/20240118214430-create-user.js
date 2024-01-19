'use strict';

// eslint-disable-next-line @typescript-eslint/no-var-requires
const baseModelMigration = require('../models/base-model/base-model.migration');

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface, Sequelize) {
    return await queryInterface.createTable('Users', {
      ...baseModelMigration(Sequelize),
      name: {
        type: Sequelize.STRING,
        allowNull: false,
      },
      email: {
        type: Sequelize.STRING,
        allowNull: false,
        validate: {
          isEmail: true,
        },
      },
      isActive: {
        type: Sequelize.BOOLEAN,
        allowNull: false,
        defaultValue: true,
      },
    });
  },

  async down(queryInterface) {
    return queryInterface.dropTable('Users');
  },
};
