import React, { useMemo } from 'react'
import './WeatherCard.css'
const WeatherCard = ({ weather }) => {
    if (!weather) return null
    // console.log(weather)

    const { name, main, weather: weatherInfo } = weather
    const { temp, humidity } = main || {}
    const { description, icon } = (weatherInfo && weatherInfo[0]) || {}

    console.log(name, temp, humidity, description, icon)

    const iconUrl = useMemo(() =>
        (icon ? `https://openweathermap.org/img/wn/10d@2x.png` : ""), []
    )

    return (
        <div className='card'>
            <h2>서울</h2>
            <div className="img-wrap">
                {iconUrl && <img src={iconUrl} alt={description} />}

            </div>
            <p>{description}</p>
            <p>🌡️ {Math.round(temp)}℃</p>
            <p>💧 {humidity}%</p>

        </div>
    )
}

export default WeatherCard