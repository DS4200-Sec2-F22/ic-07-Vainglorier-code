const data = [55000, 48000, 27000, 66000, 90000]
const MARGIN = 50;
const FRAME_HEIGHT = 1200;
const FRAME_WIDTH = 300;

const FRAME = d3.select("#vis")
                    .append("svg")
                        .attr("height", FRAME_HEIGHT)
                        .attr("width", FRAME_WIDTH)
                        .attr("class", "frame");

const MAX_Y = d3.max(data, (d) => {return d;});

const Y_SCALE = d3.scaleLinear()
                    .domain([0, MAX_Y + 10000])
                    .range([0, FRAME_HEIGHT]);

FRAME.selectAll("points")
        .data(data)
        .enter()
        .append("circle")
            .attr("cx", MARGIN)
            .attr("cy", (d) => {
                return Y_SCALE(d);
            })
            .attr("r", 20)
            .attr("class", "point");
FRAME.append("g")
        .attr("transform", "translate(" + 5*MARGIN + "," + 0 + ")")
        .call(d3.axisLeft(Y_SCALE).ticks(10))
            .attr("font-size", "20px");