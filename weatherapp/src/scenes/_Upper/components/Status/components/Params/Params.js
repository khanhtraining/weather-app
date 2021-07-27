import React from 'react'
import './params.scss'

export const Params = (props) => {
    return (
        <React.Fragment>
            {
                <div className="weatherParams-wrapper">
                    <div className="weatherParams-wrapper-item">
                            <div className="title">VISIBILITY</div>
                            <div className="content bg-number">{Math.round(props.dataFromStatus.visibility)}</div>
                            <div className="extra">Good</div>
                        </div>
                        <div className="weatherParams-wrapper-item">
                            <div className="title">WIND SPEED</div>
                            <div className="content normal-number">{Math.round(props.dataFromStatus.wind_speed)}</div>
                            <div className="extra">km/h</div>
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
            }
        </React.Fragment>
    )
}

export default Params
