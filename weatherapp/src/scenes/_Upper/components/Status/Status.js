import React, { useEffect, useState } from 'react'
import axios from 'axios'
import PropTypes from 'prop-types'
import { locationUrl } from '../../../../commons/utils'
import './status.scss'
import { DiamonLoading } from 'react-loadingg'
import Params from '../Status/components/Params/Params'
const Status = ({ locationId }) => {
    const [consolidatedWeatherFirst, setConsolidatedWeatherFirst] = useState(null)
    const [weather, setWeather] = useState([])
    const [loading, setLoading] = useState(true)
    const [error, setError] = useState(false)

    useEffect(() => {
        const fetchData = async () => {
            setLoading(true)
            setError(false)
            try {
                const response = await axios.get(`${locationUrl}/${locationId}`)
                setWeather(response.data)
                setConsolidatedWeatherFirst(response.data.consolidated_weather[0])
                setLoading(true)
                setError(false)
            } catch (err) {
                setError(true)
            }
            setLoading(false)
        }
        fetchData()
    },[locationId])
    console.log(weather)
    console.log(consolidatedWeatherFirst);
    return (
        <React.Fragment>
            {
                consolidatedWeatherFirst === null ? "" : <>
                    {loading && <div className='location'>loading...</div>}
                    <div className='location'>Location: {weather.title}</div>
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
                    <Params dataFromStatus={consolidatedWeatherFirst} />
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
