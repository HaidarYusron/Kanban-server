'use strict';

module.exports = {
  up:  (queryInterface, Sequelize) => {
    return queryInterface.addColumn('Tasks','UserId',{
      type: Sequelize.INTEGER
    })
  },

  down:  (queryInterface, Sequelize) => {
    return queryInterface.removeColumn("Tasks", "UserId")
  }
};
