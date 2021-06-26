'use strict';

module.exports = {
	up: async (queryInterface, Sequelize) => {
		return queryInterface.addColumn('Products', 'price', { //inserir o nome da tabela no singular
			type: Sequelize.FLOAT
		});
	},

	down: async (queryInterface, Sequelize) => {
		return queryInterface.removeColumn('Products', 'price');
	}
};