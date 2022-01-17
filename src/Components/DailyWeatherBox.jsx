import React from 'react'
import { getFiveDaysWeather } from '../Functions/getFiveDaysWeather'
import '../Styles/App.css';

const CompareTemperatures = (temp_min, temp_max) => {

    if (temp_min || temp_max < 14)
        return 'blue-temperature'

    if (temp_min || temp_max >= 14 && temp_min || temp_max <= 20 )
        return 'green-temperature'

    if (temp_min || temp_max >= 20 && temp_min || temp_max <= 25)
        return 'orange-temperature'
    
    if (temp_min || temp_max > 25)
        return 'red-temperature'
}

const DailyWeatherBox = ({threeHourForecastData}) => {

    const fiveDaysWeatherObjects = getFiveDaysWeather(threeHourForecastData)

    const weatherData = fiveDaysWeatherObjects.map((element, index) => {
        const {dt_txt, main, weather, clouds} = element 
        const {temp_min, temp_max, pressure} = main 
        const {description} = weather[0] 
        
        const FormatDateTime = () => {
            const dateTime = new Date(dt_txt)

            const day = dateTime.toLocaleDateString('en-US', {weekday: 'short'})
            const numberDay = dateTime.getUTCDate()
            const month = dateTime.toLocaleDateString('en-US', {month: 'short'})

            return day + ' ' + numberDay + ' ' + month
        }

        return (
            <div className={`single-weather-container ${index=== 0 ? 'weather-today-left-border' : ''}`} key={index}>
                <div>
                    <p className='date'><span className='date-time'>{`${FormatDateTime()} `}</span><span>{` ${index === 0 ? '(today)' : ''}`}</span></p>
                    <p className='description'>{description}</p>
                    <p className='clouds'><span className='clouds-span'>clouds:</span> {clouds.all}%, {pressure}hpa</p>
                </div>
                <div className='temperatures'>
                    <p className={CompareTemperatures(temp_min, temp_max)}>{temp_min}C</p>
                    <p className={CompareTemperatures(temp_min, temp_max)}>{temp_max}C</p>
                </div>
            </div>
        )
    })
   
    return (
        <div className='weather-container'>
            <h3>Weather</h3>
            {weatherData}
        </div>
    )
}

export default DailyWeatherBox
