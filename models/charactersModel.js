const mysql = require('mysql2/promise');

const connection = mysql.createPool({
    host: 'localhost',
    user: 'albertassi',
    password: 'rlda88fm',
    database: 'live_lecture_21_1', //nome do banco de dados
    port: '3306',
});

const getAll = async () => connection.execute('SELECT * FROM characters').then(([results]) => results);

const getById = async (id) => connection.execute('SELECT * FROM characters WHERE id = ?', [id])
.then(([[character]]) => character || null);

const add = async (name, cartoon) => connection.execute('INSERT INTO characters (name, cartoon) VALUES (?, ?)',
[name, cartoon]).then(([result]) => ({id: result.insertId, name, cartoon}));

const update = async (id, name, cartoon) => await connection.execute('UPDATE live_lecture_21_1.characters SET name=?, cartoon=? WHERE id=?',
[name, cartoon, id]);

const exclude = async (id) => connection.execute('DELETE FROM live_lecture_21_1.characters WHERE id=?', [id]);

module.exports = {
    getAll,
    getById,
    add,
    update,
    exclude,
};