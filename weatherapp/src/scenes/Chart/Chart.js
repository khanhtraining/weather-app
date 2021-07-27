import React, { useEffect } from 'react'
import './chart.scss'
import * as d3 from 'd3'
import { fakeAPIPromise } from '../../__mock__/fakeAPIPromise'
<script src="https://d3js.org/d3.v4.min.js" charset="utf-8"></script>

export const Chart = () => {
    useEffect(() => {
        var height
        var Svg = d3.select(".svgchart")
            .append("svg")
            .attr("height", height)
        var g = Svg.append("g")
            .attr('class', 'margin-container')
        var x = d3.scalePoint()
            .domain((fakeAPIPromise.map(function (d) { return d.hour; })))
        var y = d3.scaleLinear()
            .domain([0, 3])
        var xAxis = g.append("g")
            .attr("transform", "translate(0,0)")
            .style('color', '#000')
        var yAxis = g.append("g")
        var lineSunColor = 'orange'

        var lineTidePath = d3.area()
            .x(function (d) { return x(d.hour); })
            .y(function (d) { return y(d.tide); })
            .curve(d3.curveBumpX),
            lineSunPath = d3.area()
                .x(function (d) { return x(d.hour); })
                .y(function (d) { return y(d.sun); })
                .curve(d3.curveMonotoneX);

        const rectangle = () => {
            g.append('path')
                .data(fakeAPIPromise)
                .attr("class", 'rect-line')
                .attr("x", function (d) { return x(d.hour); })
                .attr("y", function (d) { return y(d.tide); })
                .attr("width", 50)
                .attr("height", 30)
                .style("stroke", 'pink')
                .style("fill", 'pink')
                .style("stroke-width", '1px')
        }

        const lineTideMain = () => {
            g.append('path')
                .data([fakeAPIPromise])
                .attr('class', 'line-tide')
                .style("stroke", '#0affe840')
                .attr('d', lineTidePath);
        }
        const lineSunMain = () => {
            g.append('path')
                .data([fakeAPIPromise])
                .attr('class', 'line-sun')
                .style("stroke", lineSunColor)
                .style("stroke-width", '2px')
                .style("fill", 'none')
                .attr('d', lineSunPath);
        }





        const drawChart = () => {
            const currentWidth = parseInt(d3.select('.svgchart').style('width'), "100%")
            const currentHeight = parseInt(d3.select('.svgchart').style('height'), "100%")
            Svg.attr("width", currentWidth)
                .attr('height', currentHeight)
            x.range([0, currentWidth - 5]);
            xAxis.call(d3.axisBottom(x).ticks(2))
            y.range([currentHeight, 0]);
            yAxis.call(d3.axisLeft(y).ticks(10))
            var area = d3.area()
                .x(function (d) { return x(d.hour); })
                .y0(currentHeight)
                .y1((function (d) { return y(d.tide); }))
                .curve(d3.curveBumpX);

            g.append('path')
                .data(fakeAPIPromise)
                .attr('class', 'area')
                .attr('d', area(fakeAPIPromise))
                .attr('fill', '#0affe840')

            lineTideMain()
            lineSunMain()
            rectangle()
        }
        drawChart()
        // window.addEventListener('resize', drawChart)
    })

    return (
        <div className='svgchart'>
        </div>
    )
}

export default Chart
