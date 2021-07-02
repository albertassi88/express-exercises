'use strict';

module.exports = {
  up: async (queryInterface, Sequelize) => {
      queryInterface.bulkInsert("Users", [
        {
          name: "Ruben",
          email: "albertassi88@gmail.com",
          password: "123456"
        },
        {
          name: "Luiz",
          email: "luiz@gmail.com",
          password: "12345678910"
        },
      ])
  },

  down: async (queryInterface, Sequelize) => {
    queryInterface.bulkDelete("Users", null, {});
  },
};
