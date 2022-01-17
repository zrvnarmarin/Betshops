import React from 'react'
import DailyWeatherBox from './DailyWeatherBox'
import useFetchData from './useFetchData'

let temperatureUnits = 'metric';
let key = '9158ee90d22073511d5c6fa06e0bf26c'

const WeatherWidget = ({city}) => {
    
    const url = `http://api.openweathermap.org/data/2.5/forecast?q=${city}&appid=${key}&units=${temperatureUnits}`
    
    const {data, isPending} = useFetchData(url)
    
    return (
        <div>
            {!isPending && <DailyWeatherBox threeHourForecastData={data.list} />}
        </div>
    )
}

export default WeatherWidget
