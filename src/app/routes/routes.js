const path = require('path');
const db = require("../../config/database");
const NetworkDAO = require("../../infra/NetworkDAO")


module.exports = (app, express) => {
    app.use(express.static(path.join(__dirname, '../..')));
    app.get("/", (req, resp) => {
        const network = new NetworkDAO(db);
        network.nodeList()

            .then((modes) => {
                resp.marko(
                    require('../views/index.marko')
                )
            })
            .catch((error) => { console.log(error) });
    });
    app.get("/network", (req, resp) => {
        resp.marko(
            require('../views/network.marko')
        )
    });
}

