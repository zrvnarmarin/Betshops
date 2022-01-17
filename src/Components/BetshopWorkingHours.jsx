import React from 'react'
import BetshopHours from '../WebAssets/ic_bet_shop_hours.png'

const startTime = new Date()
startTime.setHours(8, 0, 0)
const endTime = new Date()
endTime.setHours(16, 0, 0)

const BetshopWorkingHours = ({betshopLocalDateTime}) => {

    return (
        <div className='betshop-hours'>
            {betshopLocalDateTime && new Date(betshopLocalDateTime.date_time) >= startTime && new Date(betshopLocalDateTime.date_time) <= endTime 
            ? <p><img src={BetshopHours}></img>Open now until {endTime.toLocaleTimeString()}</p> 
            : <p><img src={BetshopHours}></img>Opens tommorrow at {startTime.toLocaleTimeString()}</p> }
        </div>
    )
}

export default BetshopWorkingHours
