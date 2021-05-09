import React, { useRef, useState, useEffect } from 'react';
import './chart.scss';

export const Chart = props => {
    <canvas class="chart-canvas" width="2718" height="294"></canvas>
    const chartRef = useRef(null)

    const draw = ctx => {
        ctx.beginPath();
        ctx.moveTo(0,180);
        ctx.quadraticCurveTo(250,0,588,250);
        ctx.strokeStyle = 'orange';
        ctx.stroke();
    }

    useEffect(() => {
        const chart = chartRef.current
        const context = chart.getContext('2d')
        draw(context)
    }, [draw])
    return <canvas width="375" height="294" ref={chartRef}{...props} />
}

export default Chart;