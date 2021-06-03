const model = require('../models/peopleModel');

const getAll = async () => model.getAll();

const getById = async (id) => {
    const people = await model.getById(id);

    if (!people) {
        throw { code: 'not_found', message: `People with ID ${id} was not found` };
    }
    return people;
};

const create = async ({ name, age }) => {
    if (age < 18) {
        throw { code: 'underage_person', message: 'Only people with 18 or more years can be inserted' };
    }
    return model.create(name, age);
};

const update = async (id, name, age) => model.update(id, name, age);

const exclude = async (id) => model.exclude(id);

module.exports = {
    getAll,
    getById,
    create,
    update,
    exclude,
}; 