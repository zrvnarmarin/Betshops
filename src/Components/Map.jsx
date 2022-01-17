import React, { useMemo, useState } from 'react'
import GoogleMapReact from 'google-map-react'
import LocationMarker from './LocationMarker';
import BetshopInfoBox from './BetshopInfoBox';
import '../Styles/App.css';

const Map = ({betshopData, zoom, coords}) => {

    const [selectedId, setSelectedID] = useState(null)
    
    const selectTemp = useMemo(() => {
        return betshopData.find(element => element.id === selectedId) 
    }, [selectedId]) 
    
    const ReturnId = (id) => setSelectedID(id)

    const markers = betshopData.map(betshop => {
        const {id, location} = betshop
        const {lng, lat} = location
 
        return (
            <LocationMarker 
                lat={lat}
                lng={lng}
                key={id}
                id={id}
                returnID={ReturnId}
                isSelected={selectedId === id ? true : false}
            />
        )
    })

    return (
        <div className='main-container'>
            <div className='map'>
                <GoogleMapReact
                    bootstrapURLKeys={{key: 'AIzaSyB3CFXf_kRlpHqPf7XEnBWmJzd92JcN28s' }}
                    defaultCenter={coords}
                    defaultZoom={zoom}
                >
                    {markers}
                </GoogleMapReact>
            </div>
                {selectTemp && <BetshopInfoBox data={selectTemp} />}
        </div>
    )
}

Map.defaultProps = {
    zoom: 6
}

export default Map
