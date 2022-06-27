interface Weather {
  title: string
  icon: string
  humidity: number
  temperature: number
}

interface City {
  title: string
  description?: string
  country: string
  lat: number
  lng: number
  currentISO: string
  perDolar: number
  date: string
  weather: Weather
}

interface CityElement {
  name: string
  state?: string
  country: string
  lat: number
  lon: number
}
