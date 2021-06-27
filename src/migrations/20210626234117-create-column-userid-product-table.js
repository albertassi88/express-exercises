//Adicionar uma coluna na tabela de produtos que se chama userId.

'use strict';

module.exports = {
	up: async (queryInterface, Sequelize) => {
		return queryInterface.addColumn('Products', 'userId', { //inserir o nome da tabela no singular
			type: Sequelize.INTEGER,
			allowNull: false,   //não pode ser nullo
			//defaultValue: 1,  //para adicionar o valor 1 em todos produtos já cadastrados
			references: { //o userId faz referência ao campo id da tabela Users
				model: 'Users',
				key: 'id',
			},
			onUpdate: 'CASCADE',
			onDelete: 'CASCADE',
    	});
	},

	down: async (queryInterface, Sequelize) => {
		return queryInterface.removeColumn('Products', 'userId');
	}
};


