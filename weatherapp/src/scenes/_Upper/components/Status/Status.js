import React, { useEffect, useState } from 'react'
import PropTypes from 'prop-types'
import useFetchData from '../../../../commons/useFetchData'
import { locationUri } from '../../../../commons/utils'
import './status.scss'
import { DiamonLoading } from 'react-loadingg'
import Params from '../Status/components/Params/Params'
const Status = ({ locationId }) => {
    const [consolidatedWeatherFirst, setConsolidatedWeatherFirst] = useState(null)
    const { data, loading, error } = useFetchData(`${locationUri}/${locationId}`, {}, [locationId])

    useEffect((props) => {
        if (data.consolidated_weather !== undefined && data.consolidated_weather.length > 0) {
            setConsolidatedWeatherFirst(data.consolidated_weather[0])
            return consolidatedWeatherFirst
        }
    }, [data])

    return (
        <React.Fragment>
            {
                consolidatedWeatherFirst === null ? "" : <>
                    {loading && <div className='location'>loading...</div>}
                    <div className='location'>Location: {data.title}</div>
                    <div className="weatherStatus-wrapper">
                        <div className="weatherStatus-wrapper__icon">
                        </div>
                        <div className="weatherStatus-wrapper__info">
                            <div className="status-text">{consolidatedWeatherFirst.weather_state_name}</div>
                            <div className="status-info">
                                <span className="status-temperature">{Math.round(consolidatedWeatherFirst.the_temp)} C</span>
                                <span className="status-humidity">{Math.round(consolidatedWeatherFirst.humidity)}%</span>
                            </div>
                        </div>
                    </div>
                    <Params dataFromStatus={consolidatedWeatherFirst}/>
                </>
            }
            {error && <div className='text-danger'> {error} </div>}
            {loading && <div className='location'><DiamonLoading /></div>}
        </React.Fragment>
    )
}

Status.propTypes = {
    locationId: PropTypes.string
}

export default Status
