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

        // Viết 1 cái Set interval chỗ này cho nó tự gọi lại hàm fetch api, ví dụ 5' hoặc 30s gì đó...vip
        // Fetch API
        fetchApi();
    }, []);
    const onResizeWidth = e => {
        const width = window.innerWidth;
        setWindowWidth(width);
    }
    // Get datetime
    useEffect(() => {
        if (responseData != null && responseData !== undefined) {
            const dateTime = new Date(responseData.dt * 1000);
            console.log(dateTime.getDate());
            console.log(dateTime.getDay());
            console.log(dateTime.getFullYear())
        }
    }, [responseData]);

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
        date: moment(d.time).format('DD/MM/yyyy'),
        tide: d.tide
    }));

    console.log(formartedData)

    useEffect(async () => {
        const data = await fakeAPIPromise;
        console.log(data, 'data');
        //setData(data);
    }, []);

    console.log(data);

    return (
        <div className="svg_chart">
            <div className="svg_chart-day">

                {/* {formartedData.map(d => [                    <h4>Day
                        {d.date}
                        {' - '}
                        {d.tide}
                    </h4>
                ])} */}

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
            </svg>

        </div>
    )
}

export default Chart;