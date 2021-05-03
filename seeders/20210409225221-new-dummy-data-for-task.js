'use strict';
let data = [
  {
    title: "Belajar vue",
    category: "backlog",
    UserId: 7,
    description: "step by step",
    createdAt: new Date(),
    updatedAt: new Date()
  }, 
  {
    title: "Belajar vue-cli",
    category: "done",
    UserId: 1,
    description: "step by step",
    createdAt: new Date(),
    updatedAt: new Date()
  },
  {
    title: "Belajar bikin styling 3",
    category: "doing",
    UserId: 9,
    description: "dicicil",
    createdAt: new Date(),
    updatedAt: new Date()
  },
  {
    title: "Belajar ajax ajax",
    category: "done",
    UserId: 9,
    description: "rajin explore",
    createdAt: new Date(),
    updatedAt: new Date()
  }
]

module.exports = {
  up:  (queryInterface, Sequelize) => {
    return queryInterface.bulkInsert('Tasks', data)
   
  },

  down:  (queryInterface, Sequelize) => {
    return queryInterface.bulkDelete('Tasks', null)
  
  }
};
