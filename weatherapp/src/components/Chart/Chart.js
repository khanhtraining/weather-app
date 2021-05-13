import React, { useEffect, useRef, useState } from 'react';
import { Helmet } from 'react-helmet';
import './chart.scss';
import * as d3 from "d3";
import axios from "axios";
import { _URL_HOURLY } from '../../constants.js';

export const Chart = props => {

        const [responseData, setResponseData] = React.useState('');
        const fetchWeatherData = React.useCallback(() => {
            axios({
            "method": "GET",
            "url": _URL_HOURLY ,
            })
            .then(function(response) {
                console.log('yes')
                console.log(response.data)
            })
            .catch((error) => {
                console.log('no')
                console.log(error)
            })
        }, [])
        React.useEffect(() => {
            fetchWeatherData()
        }, [fetchWeatherData])

        useEffect(() => {
            
        })

        useEffect(() => {   
            var lineGenerator = d3.line()
                .curve(d3.curveCardinal);
        
        const canvasWater = [
            [0, 300],
            [0, 260],
            [100,230],
            [200,210],
            [300,190],
            [400,170],
            [500,150],
            [600, 140],
            [700, 150],
            [800, 170],
            [900, 190],
            [1000, 210],
            [1100, 230],
            [1200, 250],

            [1300,230],
            [1400,210],
            [1500,190],
            [1600,170],
            [1700,150],
            [1800, 140],
            [1900, 150],
            [2000, 170],
            [2100, 190],
            [2200, 210],
            [2300, 230],
            [2400, 250],

            [2500,230],
            [2600,210],
            [2700,190],
            [2800,170],
            [2900,150],
            [3000, 140],
            [3100, 150],
            [3200, 170],
            [3300, 190],
            [3400, 210],
            [3500, 230],
            [3600, 250],

            [3700,230],
            [3800,210],
            [3900,190],
            [4000,170],
            [4100,150],
            [4200, 140],
            [4300, 150],
            [4400, 170],
            [4500, 190],
            [4600, 210],
            [4700, 230],
            [4800, 250],

            [4900,230],
            [5000,210],
            [5100,190],
            [5200,170],
            [5300,150],
            [5400, 140],
            [5500, 150],
            [5600, 170],
            [5700, 190],
            [5800, 210],
            [5900, 230],
            [6000, 250],
            
            [6100,230],
            [6200,210],
            [6300,190],
            [6400,170],
            [6500,150],
            [6600, 140],
            [6700, 150],
            [6800, 170],
            [6900, 190],
            [7000, 210],
            [7100, 230],
            [7200, 250],

            [7200,300]
        ];

        const canvas1 = [
            [600, 300],
            [1200, 100],
            [1800, 300],
        ];

        const canvas2 = [
            [3000, 300],
            [3600, 100],
            [4200, 300],
        ];

        const canvas3 = [
            [5400, 300],
            [6000, 100],
            [6600, 300],
        ];

        const pathData = lineGenerator(canvasWater);
        const pathCanvas1 = lineGenerator(canvas1);
        const pathCanvas2 = lineGenerator(canvas2);
        const pathCanvas3 = lineGenerator(canvas3);

        d3.select('.pathData')
            .attr('d', pathData);
        d3.select('.pathCanvas1')
            .attr('d', pathCanvas1);
        d3.select('.pathCanvas2')
            .attr('d', pathCanvas2);
        d3.select('.pathCanvas3')
            .attr('d', pathCanvas3);
            
    }, [])
    return (
        <div className="svg_chart">
           <svg className="svg">
                <path className='pathData'>
                </path>
                <path className='pathCanvas1'>
                </path>
                <path className='pathCanvas2'>
                </path>
                <path className='pathCanvas3'></path>
         </svg>

        </div>
    )
}

export default Chart;