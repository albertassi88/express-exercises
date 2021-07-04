'use strict';

module.exports = {
	up: async (queryInterface, Sequelize) => {
		return queryInterface.bulkInsert('Users',  
			[
				{
					name: 'Ruben',
					age: 38,
					createdAt: new Date(),
					updatedAt: new Date()
				},
        		{
					name: 'Ellen',
					age: 37,
					createdAt: new Date(),
					updatedAt: new Date()
				}
			],
			{}
		);
	},

	down: async (queryInterface, Sequelize) => {
		return queryInterface.bulkDelete('Users', null, {});
	}
};