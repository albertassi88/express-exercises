const getCollections = require('./connection');

const getAll = async () => 
    getCollections('movies').then(db => db.find().toArray());  
    
const create = async (title, directedBy, releaseYear) => {
  const movies = await getCollections('movies').then((db) => 
    db.insertOne({ title, directedBy, releaseYear })
  );
  return { _id: movies.insertedId, title, directedBy, releaseYear };      
  
};

module.exports = {
  create,
  getAll,
};