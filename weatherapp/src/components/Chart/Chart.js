import React, { useEffect, useRef, useState } from 'react';
import './chart.scss';
import * as d3 from "d3";
import axios from "axios";
import moment from 'moment';
import { _URL_HOURLY } from '../../constants.js';
import { fakeAPIPromise } from '../../fakeAPIPromise';

export const Chart = props => {
    const [responseData, setResponseData] = React.useState(null);
    const [data, setData] = useState([]);
    const [dateTime, setDateTime] = React.useState(null);
    const [windowWidth, setWindowWidth] = useState(window.innerWidth);
    // Constructor
    useEffect(() => {
        var lineGenerator = d3.line()
            .curve(d3.curveCardinal);
        var lineGeneratorStraight = d3.line();
        //Day 1
        var pathrectangle_day1_12pm = d3.path();
        pathrectangle_day1_12pm.rect(0, 180, 70, 50);
        //
        var pathrectangle_day1_6am = d3.path();
        pathrectangle_day1_6am.rect(600, 40, 70, 50);
        //
        var pathrectangle_day1_12am = d3.path();
        pathrectangle_day1_12am.rect(1200, 180, 70, 50);
        //
        var pathrectangle_day1_6pm = d3.path();
        pathrectangle_day1_6pm.rect(1800, 40, 70, 50);

        //Day 2
        var pathrectangle_day2_12pm = d3.path();
        pathrectangle_day2_12pm.rect(2400, 180, 70, 50);
        //
        var pathrectangle_day2_6am = d3.path();
        pathrectangle_day2_6am.rect(3000, 40, 70, 50);
        //
        var pathrectangle_day2_12am = d3.path();
        pathrectangle_day2_12am.rect(3600, 180, 70, 50);
        //
        var pathrectangle_day2_6pm = d3.path();
        pathrectangle_day2_6pm.rect(4200, 40, 70, 50);

        //Day 3
        var pathrectangle_day3_12pm = d3.path();
        pathrectangle_day3_12pm.rect(4800, 180, 70, 50);
        //
        var pathrectangle_day3_6am = d3.path();
        pathrectangle_day3_6am.rect(5200, 40, 70, 50);
        //
        var pathrectangle_day3_12am = d3.path();
        pathrectangle_day3_12am.rect(5800, 180, 70, 50);
        //
        var pathrectangle_day3_6pm = d3.path();
        pathrectangle_day3_6pm.rect(7200, 40, 70, 50);

        const canvasWater = [
            [0, 300],
            [0, 260],
            [100, 230],
            [200, 210],
            [300, 190],
            [400, 170],
            [500, 150],
            [600, 140],
            [700, 150],
            [800, 170],
            [900, 190],
            [1000, 210],
            [1100, 230],
            [1200, 250],

            [1300, 230],
            [1400, 210],
            [1500, 190],
            [1600, 170],
            [1700, 150],
            [1800, 140],
            [1900, 150],
            [2000, 170],
            [2100, 190],
            [2200, 210],
            [2300, 230],
            [2400, 250],

            [2500, 230],
            [2600, 210],
            [2700, 190],
            [2800, 170],
            [2900, 150],
            [3000, 140],
            [3100, 150],
            [3200, 170],
            [3300, 190],
            [3400, 210],
            [3500, 230],
            [3600, 250],

            [3700, 230],
            [3800, 210],
            [3900, 190],
            [4000, 170],
            [4100, 150],
            [4200, 140],
            [4300, 150],
            [4400, 170],
            [4500, 190],
            [4600, 210],
            [4700, 230],
            [4800, 250],

            [4900, 230],
            [5000, 210],
            [5100, 190],
            [5200, 170],
            [5300, 150],
            [5400, 140],
            [5500, 150],
            [5600, 170],
            [5700, 190],
            [5800, 210],
            [5900, 230],
            [6000, 250],

            [6100, 230],
            [6200, 210],
            [6300, 190],
            [6400, 170],
            [6500, 150],
            [6600, 140],
            [6700, 150],
            [6800, 170],
            [6900, 190],
            [7000, 210],
            [7100, 230],
            [7200, 250],

            [7200, 300]
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

        const canvasMoon1 = [
            [0,0],
            [0,300],
            [600,300],
            [600,0]
        ]

        const canvasMoon2 = [
            [0,0],
            [0,300],
            [600,300],
            [600,0]
        ]

        const pathData = lineGenerator(canvasWater);
        const pathCanvas1 = lineGenerator(canvas1);
        const pathCanvas2 = lineGenerator(canvas2);
        const pathCanvas3 = lineGenerator(canvas3);
        const pathMoon = lineGeneratorStraight(canvasMoon1);

        d3.select('.pathData')
            .attr('d', pathData);

        d3.select('.pathCanvas1')
            .attr('d', pathCanvas1);
        d3.select('.pathCanvas2')
            .attr('d', pathCanvas2);
        d3.select('.pathCanvas3')
            .attr('d', pathCanvas3);

        d3.select('.pathMoon')
            .attr('d',pathMoon);
        //day 1
        d3.select('.pathrectangle_day1_12pm')
            .attr('d', pathrectangle_day1_12pm)
            .attr("fill", '#cfcfcf');

        d3.select('.pathrectangle_day1_6am')
            .attr('d', pathrectangle_day1_6am)
            .attr("fill", '#cfcfcf');

        d3.select('.pathrectangle_day1_12am')
            .attr('d', pathrectangle_day1_12am)
            .attr("fill", '#cfcfcf');

        d3.select('.pathrectangle_day1_6pm')
            .attr('d', pathrectangle_day1_6pm)
            .attr("fill", '#cfcfcf');
        //day 2
        d3.select('.pathrectangle_day2_12pm')
            .attr('d', pathrectangle_day2_12pm)
            .attr("fill", '#cfcfcf');

        d3.select('.pathrectangle_day2_6am')
            .attr('d', pathrectangle_day2_6am)
            .attr("fill", '#cfcfcf');

        d3.select('.pathrectangle_day2_12am')
            .attr('d', pathrectangle_day2_12am)
            .attr("fill", '#cfcfcf');

        d3.select('.pathrectangle_day2_6pm')
            .attr('d', pathrectangle_day2_6pm)
            .attr("fill", '#cfcfcf');
        // Viết 1 cái Set interval chỗ này cho nó tự gọi lại hàm fetch api, ví dụ 5' hoặc 30s gì đó...vip
        // Fetch API
        // fetchApi();
    }, []);
    const onResizeWidth = e => {
        const width = window.innerWidth;
        setWindowWidth(width);
    }
    // Get datetime
    // useEffect(() => {
    //     if (responseData != null && responseData !== undefined) {
    //         const dateTime = new Date(responseData.dt * 1000);
    //         console.log(dateTime.getDate());
    //         console.log(dateTime.getDay());
    //         console.log(dateTime.getFullYear())
    //     }
    // }, [responseData]);

    // const aaa = setDateTime(date.getDate());
    // console.log(aaa);

    const fetchApi = () => {
        axios({
            "method": "GET",
            "url": _URL_HOURLY,
        })
            .then(function (response) {
                setResponseData(response.data);
            })
            .catch((error) => {
                console.log(error)
            })
    }

    const formartedData = fakeAPIPromise.map(d => ({
        time: moment(d.time).format('HH:mm'),
        tide: d.tide
    }));

    console.log(formartedData)

    // useEffect(async () => {
    //     const data = await formartedData;
    //     console.log(data, 'data');
    //     //setData(data);
    // }, []);

    console.log(formartedData[0].tide);

    return (
        <div className="svg_chart">

            <div className="svg_chart-day">

            </div>
            <svg className="svg">

                <path className='pathData'>

                </path>
                <path className='pathCanvas1'>
                </path>
                <path className='pathCanvas2'>
                </path>
                <path className='pathCanvas3'>
                </path>
                
                <path className='pathrectangle_day1_12pm'>
                </path>
                <text x="0" y="200" >{formartedData[1].tide} m</text>
                <text x="0" y="220" >{formartedData[1].time} am</text>

                <path className='pathrectangle_day1_6am'>
                </path>
                <text x="624" y="60" >{formartedData[0].tide} m</text>
                <text x="600" y="80" >{formartedData[0].time} am</text>

                <path className='pathrectangle_day1_12am'>
                </path>
                <text x="1200" y="200" >{formartedData[2].tide} m</text>
                <text x="1200" y="220" >{formartedData[2].time} am</text>

                <path className='pathrectangle_day1_6pm'>
                </path>
                <text x="1800" y="60" >{formartedData[3].tide} m</text>
                <text x="1800" y="80" >{formartedData[3].time} am</text>



                <path className='pathrectangle_day2_12pm'>
                </path>
                <text x="2400" y="200" >{formartedData[4].tide} m</text>
                <text x="2400" y="220" >{formartedData[4].time} am</text>

                <path className='pathrectangle_day2_6am'>
                </path>
                <text x="3000" y="60" >{formartedData[5].tide} m</text>
                <text x="3000" y="80" >{formartedData[5].time} am</text>

                <path className='pathrectangle_day2_12am'>
                </path>
                <text x="3600" y="200" >{formartedData[6].tide} m</text>
                <text x="3600" y="220" >{formartedData[6].time} am</text>

                <path className='pathrectangle_day2_6pm'>
                </path>
                <text x="4200" y="60" >{formartedData[7].tide} m</text>
                <text x="4200" y="80" >{formartedData[7].time} am</text>


                <path className='pathrectangle_day3_12pm'>
                </path>
                <text x="4800" y="200" >{formartedData[8].tide} m</text>
                <text x="4800" y="220" >{formartedData[8].time} am</text>

                <path className='pathrectangle_day3_6am'>
                </path>
                <text x="5200" y="60" >{formartedData[9].tide} m</text>
                <text x="5200" y="80" >{formartedData[9].time} am</text>

                <path className='pathrectangle_day3_12am'>
                </path>
                <text x="5800" y="200" >{formartedData[10].tide} m</text>
                <text x="5800" y="220" >{formartedData[10].time} am</text>

                <path className='pathrectangle_day4_6pm'>
                </path>
                <text x="7200" y="60" >{formartedData[11].tide} m</text>
                <text x="7200" y="80" >{formartedData[11].time} am</text>

                <path className='pathMoon'>
                </path>
            </svg>

        </div>
    )
}

export default Chart;