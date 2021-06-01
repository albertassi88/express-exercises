const { ObjectId } = require('mongodb');
const getConnection = require('./mongodbConnection');

const getAll = async () => getConnection().then((db) => db.collection('characters').find({}).toArray());

const getById = async (id) => getConnection().then((db) => 
ObjectId.isValid(id) ? db.collection('characters').findOne({_id: ObjectId(id)}) : null);

const add = async (name, cartoon) => getConnection().then((db) => db.collection('characters')
.insertOne({ name, cartoon }).then((result) => ({ _id: result.insertedId, name, cartoon })));

const update = async (id, name, cartoon) => {
    if (!ObjectId.isValid(id)) return;
    await getConnection().then((db) => db.collection('characters')
    .updateOne({ id: ObjectId(id) }, { $set: { name, cartoon } }));
};

const exclude = async (id) => {
    if (!ObjectId.isValid(id)) return null;
    getConnection().then((db) => db.collection('characters').deleteOne({ _id: ObjectId(id) }));
};

module.exports = {
    getAll,
    getById,
    add,
    update,
    exclude,
};