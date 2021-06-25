'use strict';

module.exports = {
  up: async (queryInterface, Sequelize) => {
      //bulkInsert - Insere vários dados de uma única vez   
      queryInterface.bulkInsert("Stores", [
        {
          name: "Magazine",
          description: "Loja que tem eletros"
        },
        {
          name: "Tem de tudo",
          description: "Pode vir que aqui tem tudo"
        },
      ])
  },

  down: async (queryInterface, Sequelize) => {
    queryInterface.bulkDelete("Stores", null, {});
  },
};
