class NetworkView {
    constructor() {
        this._text = `<textarea
        class="form-control"
        placeholder="a=>b \na=>c \nb=>c"
        id="FormTextarea"
        rows="3" disabled/>`;
        this._file = `<input type="file" class="custom-file-input" id="customFile" disabled/>
        <label class="custom-file-label" for="customFile">Choose file</label>`;
    }

    _update(opt) {
        if (opt == "text") {
            document.getElementById("textField").innerHTML = this._text.replace("disabled", "");
            document.getElementById("fileField").innerHTML = this._file;
        }
        else {
            document.getElementById("textField").innerHTML = this._text;
            document.getElementById("fileField").innerHTML = this._file.replace("disabled", "");
        }
    }
    _networkCreator(network) {
        const height = document.getElementById("network").offsetHeight,
            width = document.getElementById("network").offsetWidth;

        const links = network.links.map(d => Object.create(d)),
            nodes = network.nodes.map(d => Object.create(d));

        const simulation = d3.forceSimulation(nodes)
            .force("link", d3.forceLink(links).id(d => d.id))
            .force("charge", d3.forceManyBody())
            .force("center", d3.forceCenter(width / 2, height / 2));

        const svg = d3.select("#network").append("svg")
            .attr("viewBox", [0, 0, width, height]);

        const link = svg.append("g")
            .attr("stroke", "#999")
            .selectAll("line")
            .data(links)
            .join("line")
            .attr("stroke-width", 5);

        const node = svg.append("g")
            .attr("stroke", "#fff")
            .attr("stroke-width", 1.5)
            .selectAll("circle")
            .data(nodes)
            .join("circle")
            .attr("r", 10)
            .attr("fill", "#3498DB")
            .call(drag(simulation));

        node.append("title")
            .text(d => d.id);

        simulation.on("tick", () => {
            link
                .attr("x1", d => d.source.x)
                .attr("y1", d => d.source.y)
                .attr("x2", d => d.target.x)
                .attr("y2", d => d.target.y);

            node
                .attr("cx", d => d.x)
                .attr("cy", d => d.y);
        });

        function drag(simulation) {
            function dragstarted(d) {
                if (!d3.event.active) simulation.alphaTarget(0.3).restart();
                d.fx = d.x;
                d.fy = d.y;
            }

            function dragged(d) {
                d.fx = d3.event.x;
                d.fy = d3.event.y;
            }

            function dragended(d) {
                if (!d3.event.active) simulation.alphaTarget(0);
                d.fx = null;
                d.fy = null;
            }

            return d3.drag()
                .on("start", dragstarted)
                .on("drag", dragged)
                .on("end", dragended);
        }
    }
}