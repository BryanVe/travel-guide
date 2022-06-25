import { FC } from 'react'

interface CurrenciesProps {
  city: City
}

const Currencies: FC<CurrenciesProps> = (props) => {
  const { city } = props

  return (
    <span
      style={{
        fontFamily: 'Cairo',
        fontWeight: 600,
        color: '#fff',
        fontSize: 20,
      }}
    >
      1 USD - {1 * city.perDolar} {city.currenISO}
    </span>
  )
}

export default Currencies
