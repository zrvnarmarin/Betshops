import React from 'react'
import { useState } from 'react'
import TimeManager from './TimeManager'
import BetshopWorkingHours from './BetshopWorkingHours'
import BetShopLocation from '../WebAssets/ic_bet_shop_location.png'

const BetshopInfoBox = ({data}) => {
    const {name, address, city, county} = data
    const [time, setTime] = useState(null)

    return (
        <div className='betshop-info-box'>
            <div className='betshop-info-box-container'>
                <span style={{position: 'absolute', marginBottom: '92.5px'}}><img src={BetShopLocation}></img></span>
                <address>
                    <h4 className='adres'>{address}</h4>
                    <h4>{name}</h4>
                    <h4>{city}</h4>
                    <h4>{county}</h4>
                </address>
                {time && <BetshopWorkingHours betshopLocalDateTime={time}/>}
            </div>
            <TimeManager data={data} setTime={setTime}/>
        </div>
    )
}

export default BetshopInfoBox
