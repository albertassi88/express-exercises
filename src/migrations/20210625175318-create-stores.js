'use strict';

module.exports = {
  up: async (queryInterface, Sequelize) => {
    const StoresTable = queryInterface.createTable("Stores", { //criar a tabela
      id: {
        allowNull: false, //não pode ser nullo
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER
      },
      name: {
        allowNull: false,
        type: Sequelize.STRING
      },
      description: {
        allowNull: false,
        type: Sequelize.STRING
      },
    });
    return StoresTable;
  },


  down: async (queryInterface, Sequelize) => {
    queryInterface.dropTable("Stores"); //deletar a tabela
  },
};
