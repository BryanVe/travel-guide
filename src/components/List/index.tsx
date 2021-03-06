import { FC } from 'react'

import { Info, Loading } from 'components'
import { searchSvg, noDataSvg } from 'assets'

interface ListProps {
  loading: boolean
  cities?: CityElement[]
  selectCity: (city: CityElement) => void
}

const List: FC<ListProps> = (props) => {
  const { loading, cities, selectCity } = props

  return (
    <div
      style={{
        width: '100%',
        overflowY: 'auto',
        borderRadius: 10,
        marginTop: 60,
        backgroundColor: '#fff',
        outline: '5px solid #39d093',
      }}
    >
      {loading ? (
        <Loading spinnerColor='#39d093' />
      ) : !cities ? (
        <Info src={searchSvg} message='Busca una ciudad para comenzar' />
      ) : cities.length === 0 ? (
        <Info src={noDataSvg} message='No se encontrĂ³ ninguna ciudad' />
      ) : (
        cities.map((city, index) => (
          <div
            key={`${city.name}-${index}`}
            style={{
              backgroundColor: '#fff',
              padding: 16,
              cursor: 'pointer',
            }}
            onClick={() => selectCity(city)}
          >
            {[city.name, city.state, city.country]
              .filter((el) => el)
              .join(', ')}
          </div>
        ))
      )}
    </div>
  )
}

export default List
