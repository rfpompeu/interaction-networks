const sqlite3 = require('sqlite3').verbose();
const db = new sqlite3.Database('data.db');


nodeInSql = (name, group) => {
    return (`
    INSERT INTO nodes (
        name,
        groups
    ) SELECT '${name}', '${group}' WHERE NOT EXISTS (SELECT * FROM nodes WHERE name = '${name}')
    `);
}

const nodes = [
    {
        name: "teste 1",
        group: "grupo 1"
    },
    {
        name: "teste 2",
        group: "grupo 1"
    },
    {
        name: "teste 3",
        group: "grupo 2"
    },
    {
        name: "teste 4",
        group: "grupo 2"
    }

]

db.serialize(() => {
    db.run("PRAGMA foreign_keys=ON");
    db.run(`
    CREATE TABLE IF NOT EXISTS nodes (
        id INTEGER PRIMARY KEY AUTOINCREMENT,
        name TEXT NOT NULL, 
        groups TEXT NOT NULL
    )
    `);
     nodes.forEach((node) => {
         db.run(nodeInSql(node.name, node.group))
     });
});


module.exports = db;