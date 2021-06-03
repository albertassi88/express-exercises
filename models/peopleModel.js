const getCollections = require('./connection');
const { ObjectId } = require('mongodb');

const getAll = async () => 
    getCollections('people').then(people => people.find().toArray());

const getById = async (id) => {
    if (!ObjectId.isValid(id)) return null;

    return getCollections('people').then((people) => people.findOne(ObjectId(id)));
};

const create = async (name, age) => {
    const people = await getCollections('people').then((people) => 
        people.insertOne({ name, age })
    );
    return { _id: people.insertedId, name, age };
};

const update = async (id, name, age) => {
    if (!ObjectId.isValid(id)) return;

    const people = await getCollections('people').then((people) => 
        people.updateOne({ _id: ObjectId(id) }, { $set: { name, age } })
    );
    return { _id: people.insertedId, name, age };
};

const exclude = async (id) => {
    if (!ObjectId.isValid(id)) return;

    const people = await getCollections('people').then((people) => 
        people.deleteOne({ _id: ObjectId(id) })
    );
    return { _id: people.insertedId };
};

module.exports = {
    getAll,
    getById,
    create,
    update,
    exclude,
};