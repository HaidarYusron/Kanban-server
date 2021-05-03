'use strict';

let data = [
  {
    title: "Belajar bikin Kanban",
    category: "backlog",
    UserId: 7,
    description: "step by step",
    createdAt: new Date(),
    updatedAt: new Date()
  }, 
  {
    title: "Belajar bikin Kanban 2",
    category: "todo",
    UserId: 1,
    description: "step by step",
    createdAt: new Date(),
    updatedAt: new Date()
  },
  {
    title: "Belajar bikin styling",
    category: "doing",
    UserId: 9,
    description: "dicicil",
    createdAt: new Date(),
    updatedAt: new Date()
  },
  {
    title: "Belajar bikin styling 2",
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
