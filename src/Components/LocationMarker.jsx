import React from 'react'
import CurrentlyActivePinIcon  from '../WebAssets/ic_pin_active.png' 
import NormalPinIcon from '../WebAssets/ic_pin_normal.png'
import '../Styles/App.css';

const LocationMarker = ({id, returnID, isSelected}) => {

    return (
        <div className='location-marker' >
            <img src={isSelected ? CurrentlyActivePinIcon : NormalPinIcon} onClick={() => {
                returnID(id)
            }}></img>
        </div>
    )
}

export default LocationMarker
