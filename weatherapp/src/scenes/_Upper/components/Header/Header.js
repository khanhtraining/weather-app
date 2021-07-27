import React, { useState } from 'react'
import { defaultLocation } from '../../../../__mock__/mockData'
import LocationSearchBar from '../../../../components/LocationSearchBar'
import './header.scss'
import Status from '../Status/Status'

export const Header = () => {
    const [locationId, setLocationId] = useState(defaultLocation.woeid)
    const onSearch = (foundLocationId) => {
        if (foundLocationId !== '') {
            setLocationId(foundLocationId)
        }
    }
    console.log(locationId);
    return (
        <div>
            <div className="nav-container">
                <div className="nav-burger">
                    <span></span>
                    <span></span>
                    <span></span>
                </div>
                <div className="nav-location">
                    <div className="nav-location-name">myENV</div>
                    <div className="nav-location-dropdown">
                        <section>
                            <LocationSearchBar onSearch={onSearch} />
                        </section>
                    </div>
                </div>
                <div className="nav-notification"></div>
            </div>
            <Status locationId={locationId} />
        </div>
    )
}

export default Header
