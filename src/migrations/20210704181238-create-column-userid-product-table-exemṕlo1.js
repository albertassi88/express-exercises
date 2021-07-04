'use strict';

module.exports = {
	up: async (queryInterface, Sequelize) => {
		return queryInterface.addColumn('Products', 'userId', { 
			type: Sequelize.INTEGER,
			//allowNull: false,  
      		defaultValue: 1,  //para adicionar o valor 1 em todos produtos já cadastrados 
			references: { 
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