import React, { useState, useEffect } from 'react'
import WeatherWidget from './WeatherWidget'

const TimeManager = ({data, setTime}) => {

    const {city} = data
    const key = 'ad212e7faf354349860ebfe8f39abd6f'
    const timeApiUrl = `https://api.ipgeolocation.io/timezone?apiKey=${key}&location=${city}`

    const [dateTimeData, setDateTimeData] = useState(null)

    useEffect(() =>  {
        fetch(timeApiUrl).then(promise => {
        return promise.json()
    }).then(data => {
         setDateTimeData(data)
        setTime(data)
    }) 
    }, [data])

    return (
        <div>
            <WeatherWidget betshopLocalDateTime={dateTimeData} city={city}/>
        </div>
    )
}

export default TimeManager
