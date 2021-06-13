const connect = require('./connection');

const getAll = async (username) =>
  connect().then((db) => db.collection('users').findOne({ username }));

const create = async (username, password) =>
  connect().then((db) => db.collection('users').insertOne({ username, password }))
    .then(result => result.ops[0].username );

module.exports = { 
  getAll, 
  create, 
};
