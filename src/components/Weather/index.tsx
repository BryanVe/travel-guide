import { FC } from 'react'

import { capitalize } from 'utils'

interface WeatherProps {
  city: City
}

const Weather: FC<WeatherProps> = (props) => {
  const { city } = props

  return (
    <div
      style={{
        display: 'flex',
        alignItems: 'center',
        color: '#fff',
      }}
    >
      <img
        alt={city.weather.icon}
        src={`http://openweathermap.org/img/wn/${city.weather.icon}@2x.png`}
        style={{
          width: 100,
          alignSelf: 'center',
        }}
      />
      <div
        style={{
          display: 'flex',
          flexDirection: 'column',
        }}
      >
        <span
          style={{
            fontSize: '1rem',
          }}
        >
          {capitalize(city.weather.title)}
        </span>
        <span
          style={{
            fontFamily: 'Cairo',
            fontWeight: 600,
            fontSize: '1.8rem',
            lineHeight: '1.8rem',
          }}
        >
          {city.weather.temperature.toFixed(1)} °C
        </span>
      </div>
    </div>
  )
}

export default Weather
