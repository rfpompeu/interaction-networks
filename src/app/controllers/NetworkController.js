class NetworkController {
    constructor() {
        this._networkView = new NetworkView()
    }

    radioCheck(radioOption) {
        this._networkView._update(radioOption);
    }
    networkExample() {
        const network = {
            "nodes": [
                { "id": "a", "group": 1 },
                { "id": "b", "group": 1 },
                { "id": "c", "group": 1 },
            ],
            "links": [
                { "source": "a", "target": "b", "value": 1 },
                { "source": "a", "target": "c", "value": 1 },
                { "source": "c", "target": "b", "value": 1 },

            ]
        }

       

        this._networkView._networkCreator(network)
    }
}