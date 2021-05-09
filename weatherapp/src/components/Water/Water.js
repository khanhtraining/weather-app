import React, { useEffect, useRef, useState } from 'react';
import { Helmet } from 'react-helmet';
import './water.scss';
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
export const Water = props => {
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
            [0, 150],
            [0, 0],
            [700, 100],
            [1400, 10],
            [1400, 150]
        ];

        const canvas = [
            [0, 160],
            [700, 0],
            [1400, 160]
        ];

        const pathData = lineGenerator(points);
        const pathCanvas = lineGenerator(canvas);

        d3.select('.pathData')
            .attr('d', pathData);
        d3.select('.pathCanvas')
            .attr('d', pathCanvas);
    }, [])
    return (
        // <div className="svg_chart" ref={wrapperRef}>
           
        // </div>
         <svg className="svg">
         <path className='pathData'>
         </path>
         <path className='pathCanvas'>
         </path></svg>
    )
}

export default Water;