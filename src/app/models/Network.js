class Network {

    text() {
        let nodes = []
        let data = document.getElementById("FormTextarea").value
        data.split("\n").forEach(element => {
            element.split("=>").forEach((node) => {
                if (!nodes.includes(node)) {
                    nodes.push({ "id": node, group: 1 })
                }
            })
        });
        console.log(nodes)

    }
}