import React from 'react';
import './status.scss';
export const Status = () =>
    <div className="weatherStatus-wrapper">
        <div className="weatherStatus-wrapper__icon">

        </div>
        <div className="weatherStatus-wrapper__info">
            <div className="status-text">Cloudy</div>
            <div className="status-info">
                <span className="status-temperature">29.9 C</span>
                <span className="status-humidity">73%</span>
            </div>
        </div>
    </div>
export default Status;