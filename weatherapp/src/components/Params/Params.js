import React from 'react';
import './params.scss';

export  const Params = () =>
    <div className="weatherParams-wrapper">
        <div className="weatherParams-wrapper-item">
            <div className="title">PSI</div>
            <div className="content bg-number">23</div>
            <div className="extra">Good</div>
        </div>
        <div className="weatherParams-wrapper-item">
            <div className="title">RAIN</div>
            <div className="content normal-number">0</div>
            <div className="extra">mm</div>
        </div>
        <div className="weatherParams-wrapper-item">
            <div className="title">DENGUE</div>
            <div className="content circle-shape"></div>
            <div className="extra"></div>
        </div>
        <div className="weatherParams-wrapper-item">
            <div className="add-icon"></div>
            <div className="add-text">Add</div>
        </div>
    </div>
 export default Params;