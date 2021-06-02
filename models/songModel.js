const getConnection = require('./connections');
const { ObjectId } = require('mongodb');

const getAll = async () => getConnection('songs').then(songs => songs.find().toArray());

const getById = async (id) => {
    if (!ObjectId.isValid(id)) return null;

    return getConnection('songs').then((db) => db.findOne(ObjectId(id)));
};

const getByNameAndAlbum = async ({ name, album }) => { //se não tiver nada cadastrado, ele retorna esse erro.
    return getConnection('songs').then((songs) =>
        songs.findOne({ name, album }).toArray()
    );
};

const create = async (name, album) => {
    const song = await getConnection('songs').then((db) => 
        db.insertOne({ name, album })
    );
    return { _id: song.insertedId, name, album };
};

const update = async (id, name, album) => {
    if (!ObjectId.isValid(id)) return;
    await getConnection('songs').then((db) => db.updateOne({ id: ObjectId(id) }, { $set: { name, album } }));
};

const exclude = async (id) => {
    if (!ObjectId.isValid(id)) return null;

    return getConnection('songs').then((db) => {
        return db.deleteOne({ _id: ObjectId(id) });
    });
};

module.exports = {
    getAll,
    getById,
    create,
    update,
    exclude,
    getByNameAndAlbum,
};