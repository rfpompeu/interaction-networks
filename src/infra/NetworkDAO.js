class NetworkDAO {
    constructor(db) {
        this._db = db;
    }

    nodeList() {
        return new Promise((result, reject) => {
            this._db.all("SELECT * FROM nodes", (error, nodes) => {
                if (error) {
                    return reject("Não foi possível acessar o Banco de Dados!");
                }
                return result(nodes);

            })
        });
    }

}

module.exports = NetworkDAO;