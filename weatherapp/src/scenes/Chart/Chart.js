import React, { useEffect } from 'react'
import './chart.scss'
import * as d3 from 'd3'
import moment from 'moment'
import { fakeAPIPromise, fakeAPIPromisew } from '../../__mock__/fakeAPIPromise'
<script src="https://d3js.org/d3.v4.min.js" charset="utf-8"></script>

export const Chart = () => {
    // const formartedData = fakeAPIPromisew.map(d => ({
    //     date: moment(d.time).format('DD/MM/yyyy'),
    //     tide: d.tide
    // }));
    useEffect(() => {
        var Svg = d3.select(".svgchart")
            .append("svg")
            .attr("height", 200)
        // var margin = { top: 0, right: 20, bottom: 0, left: 0 }
        var g = Svg.append("g")
            .attr('class', 'margin-container')
        // .attr("transform", "translate(" + margin.left + "," + margin.top + ")");
        var x = d3.scalePoint()
            .domain((fakeAPIPromisew.map(function (d) { return d.hour; })))
        var y = d3.scaleLinear()
            .domain([0, 3])
        var xAxis = g.append("g")
            .attr("transform", "translate(0,180)")
            .style('color', '#000')
        var yAxis = g.append("g")
        // .attr("transform", "translate(20,0)")

        //
        var lineTideColor = '#8bf1ff',
            lineSunColor = 'yellow'

        var lineTidePath = d3.area()
            .x(function (d) { return x(d.hour); })
            .y(function (d) { return y(d.tide); })
            .curve(d3.curveBumpX),
            lineSunPath = d3.area()
                .x(function (d) { return x(d.hour); })
                .y(function (d) { return y(d.sun); })
                .curve(d3.curveMonotoneX);
        //
        // var rectPath = d3.path()            
        //RECTANGLE
        const rectangle = () => {
            g.append('path')
                .data(fakeAPIPromisew)
                .attr("class", 'rect-line')
                .attr("x", function (d) { return x(d.hour); })
                .attr("y", function (d) { return y(d.tide); })
                .attr("width", 50)
                .attr("height", 30)
                .style("stroke", 'pink')
                .style("fill", 'pink')
                .style("stroke-width", '1px')
        }
        //
        const lineTideMain = () => {
            g.append('path')
                .data([fakeAPIPromisew])
                .attr('class', 'line-tide')
                .style("stroke", '#0affe840')
                .attr('d', lineTidePath);
        }
        const lineSunMain = () => {
            g.append('path')
                .data([fakeAPIPromisew])
                .attr('class', 'line-sun')
                .style("stroke", lineSunColor)
                .style("stroke-width", '2px')
                .style("fill", 'none')
                .attr('d', lineSunPath);
        }
        ///////////////////////////
        //
        // var height = 3
        var area = d3.area()
            .x(function (d) { return x(d.hour); })
            .y0(180)
            .y1((function (d) { return y(d.tide); }))
            .curve(d3.curveBumpX);
        //
        // const startData = fakeAPIPromisew.map(function (datum) {
        //     return {
        //         hour: datum.hour,
        //         tide: 0,
        //         sun: 0
        //     };
        // });
        //
        const areaPathSvg = () => {
            g.append('path')
                .data(fakeAPIPromisew)
                .attr('class', 'area')
                .attr('d', area(fakeAPIPromisew))
                .attr('fill', '#0affe840')
        }

        const drawChart = () => {

            // get the current width of the div where the chart appear, and attribute it to Svg
            const currentWidth = parseInt(d3.select('.svgchart').style('width'), "100%")
            Svg.attr("width", currentWidth)

            // Update the X scale and Axis (here the 20 is just to have a bit of margin)
            x.range([0, currentWidth - 5]);
            xAxis.call(d3.axisBottom(x).ticks(2))

            y.range([180, 0]);
            yAxis.call(d3.axisLeft(y).ticks(10))

            // Add the last information needed for the circles: their X position
            // myCircles
            //     .attr("cx", function (d) { return x(d) })
            areaPathSvg()
            lineTideMain()
            lineSunMain()
            rectangle()
        }
        drawChart()
        window.addEventListener('resize', drawChart)
    })

    return (
        <div className='svgchart'>
        </div>
    )
}
export default Chart
