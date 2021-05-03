'use strict';

module.exports = {
  up: async (queryInterface, Sequelize) => {
    await queryInterface.addConstraint('Users', {
      fields: ['email'],
      type: 'unique',
      name: 'custom_unique_email'
    })
    await queryInterface.addConstraint('Users', {
      fields: ['username'],
      type: 'unique',
      name: 'custom_unique_username'
    })
  },

  down: async (queryInterface, Sequelize) => {
    await queryInterface.removeConstraint('Users', 'custom_unique_email')
    await queryInterface.removeConstraint('Users', 'custom_unique_username')
  }
};
