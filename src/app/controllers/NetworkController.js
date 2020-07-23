class NetworkController {
    constructor() {
        this._networkView = new NetworkView()
        this._network = new Network()
    }

    radioCheck(radioOption) {
        this._networkView._update(radioOption);
    }

    inputOpt() {
        let radios = document.getElementsByName("inputOption");
        for (var i = 0, length = radios.length; i < length; i++) {
            if (radios[i].checked) {
                radios[i].value==="text"? (this._network.text()): alert("file");
                break;
            }
        }

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