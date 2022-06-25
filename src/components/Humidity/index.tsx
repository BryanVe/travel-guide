import { FC } from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faDroplet } from '@fortawesome/free-solid-svg-icons'

interface HumidityProps {
  city: City
}

const Humidity: FC<HumidityProps> = (props) => {
  const { city } = props

  return (
    <div
      style={{
        display: 'flex',
        alignItems: 'center',
        color: '#fff',
      }}
    >
      <FontAwesomeIcon
        icon={faDroplet}
        style={{
          fontSize: '2.5rem',
          marginRight: 16,
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
          Humedad
        </span>
        <span
          style={{
            fontFamily: 'Cairo',
            fontWeight: 600,
            fontSize: '1.8rem',
            lineHeight: '1.8rem',
          }}
        >
          {city.weather.humidity} %
        </span>
      </div>
    </div>
  )
}

export default Humidity
