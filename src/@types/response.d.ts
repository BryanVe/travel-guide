interface Weather {
  title: string
  icon: string
  humidity: number
  temperature: number
}

interface City {
  title: string
  description: string
  country: string
  lat: number
  lng: number
  currenISO: string
  perDolar: number
  date: string
  weather: Weather
}

interface CityElement {
  title: string
  lat: number
  lng: number
}
