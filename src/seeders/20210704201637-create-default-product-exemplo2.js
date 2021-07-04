'use strict';

module.exports = {
	up: async (queryInterface, Sequelize) => {
		return queryInterface.bulkInsert('Products',  
			[
				{
					name: 'iPhone',
					description: 'iPhone nota 1000',
          			userId: 2,
					createdAt: new Date(),
					updatedAt: new Date()
				},
        		{
					name: 'XBox 360',
					description: 'XBox 360 nota 100',
          			userId: 1,
					createdAt: new Date(),
					updatedAt: new Date()
				}
			],
			{}
		);
	},

	down: async (queryInterface, Sequelize) => {
		return queryInterface.bulkDelete('Products', null, {});
	}
};