import React, { useEffect, useRef, useState } from 'react';
import { Helmet } from 'react-helmet';
import './chart.scss';
import * as d3 from "d3";
// const useResizeObserver = ref => {
//     const [dimensions, setDimensions] = useState(null);
//     useEffect(() => {
//         const observerTarget = ref.current;
//         const resizeObserver = new ResizeObserver(entries => {
//             entries.forEach(entry => {
//                 setDimensions(entry.contentRect);
//             });
//         });
//         resizeObserver.observe(observerTarget);
//         return () => {
//             resizeObserver.unobserve(observerTarget);
//         };
//     }, [ref]);
//     return dimensions;
// };
export const Chart = props => {
    // const wrapperRef = useRef();
    // const dimensions = useResizeObserver(wrapperRef);
    useEffect(() => {   
        // console.log(dimensions);
        // if (!dimensions) return;
        <Helmet>
            <script src="https://cdnjs.cloudflare.com/ajax/libs/d3/4.2.2/d3.min.js"></script>
        </Helmet>

        var lineGenerator = d3.line()
            .curve(d3.curveCardinal);

        const points = [
            [0, 250],
            [-20, 60],
            [700, -40],
            [1400, 60],
            [2100, -40],
            [2800,60],
            [3500,-40],
            [4200,60],
            [4900,-40],
            [5600,60],
            [6300,-40],
            [7000,60],
            [7700,-40],
            [8400,60],
            [9100,40],
            [9100,250],
        ];

        const canvas1 = [
            [700, 150],
            [1400, -100],
            [2100, 150],
        ];

        
        const canvas2 = [
            [3500, 150],
            [4200, -100],
            [4900, 150],
        ];

        
        const canvas3 = [
            [6300, 150],
            [7000, -100],
            [7700, 150],
        ];

        const pathData = lineGenerator(points);
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
                <path className='pathCanvas3'>
                </path>
         </svg>

        </div>
        
    )
}

export default Chart;