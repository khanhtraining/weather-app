import React, { useState } from 'react'
import { FormControl } from 'react-bootstrap'
import { locationUri } from '../../src/commons/utils'
import PropTypes from 'prop-types'
import Autocomplete from 'react-autocomplete'
import { WindMillLoading } from 'react-loadingg'

const LocationSearchBar = ({ onSearch }) => {
    const [selectedLocationName, setSelectedLocationName] = useState('')
    const [state, setState] = useState({
        loading: false,
        error: null,
        foundLocations: []
    })

    async function onChange(e) {
        const locationString = e.target.value
        setSelectedLocationName(locationString)
        if (locationString !== '') {
            const response = await fetch(`${locationUri}/search/?query=${locationString}`)
            response.json().then((response) => {
                setState({
                    loading: true,
                    error: null,
                    foundLocations: response.data
                })
            }).catch((e) => {
                setState({
                    loading: true,
                    error: e,
                    foundLocations: []
                })
            })
        }
    }

    const onSelect = (title) => {
        setSelectedLocationName(title)
        const selectedLocationName = state.foundLocations.find((location) => {
            return location.title === title
        })
        setState({
            loading: false,
            error: null,
            foundLocations: []
        })
        onSearch(selectedLocationName.woeid)
    }
    return (
        <React.Fragment>
            <Autocomplete
                items={state.foundLocations}
                getItemValue={(item) => item.title}
                renderInput={(props) => {
                    return <FormControl name='search' type='text' placeholder='Type location...' className='mr-sm-2' {...props} />
                }}
                renderItem={(item, highlighted) => (
                    <div key={item.woeid} style={{ backgroundColor: highlighted ? '#eee' : 'transparent' }}>{item.title}</div>
                )}
                value={selectedLocationName}
                onChange={onChange}
                onSelect={onSelect}
            />
            {state.error && <span className='text-danger'>{state.error}</span>}
            {state.loading && <span className='text-info'><WindMillLoading/></span>}
        </React.Fragment>
    )
}

LocationSearchBar.propTypes = {
    onSearch: PropTypes.string
}

export default LocationSearchBar
