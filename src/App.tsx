import { useState } from 'react'
import styled from 'styled-components'

import { Card, List, Modal, SearchInput } from 'components'
import { API_URL } from 'keys'

const Container = styled.div`
  width: 100vw;
  height: 100vh;
`

const Content = styled.div`
  position: absolute;
  left: 50%;
  top: 50%;
  transform: translate(-50%, -50%);
  width: 90%;
  height: 80%;
  max-width: 900px;
  display: flex;
  flex-direction: column;
  align-items: center;
`

const Title = styled.h1`
  margin: 0;
  font-size: 4rem;
  color: #39d093;
`

const App = () => {
  const [cityName, setCityName] = useState('')
  const [loadingCities, setLoadingCities] = useState(false)
  const [cities, setCities] = useState<CityElement[]>()
  const [cityModalVisible, setCityModalVisible] = useState(false)
  const [loadingCity, setLoadingCity] = useState(false)
  const [selectedCity, setSelectedCity] = useState<City>()

  const changeCityName = (event: React.ChangeEvent<HTMLInputElement>) =>
    setCityName(event.target.value)

  const searchCity = async (event: React.KeyboardEvent<HTMLInputElement>) => {
    if (event.key !== 'Enter' || cityName.length === 0) return

    try {
      setLoadingCities(true)
      const response = await fetch(`${API_URL}/cities/${cityName}`)
      if (!response.ok) throw new Error('Could not load cities')
      const data: CityElement[] = await response.json()
      setCities(data)
    } catch (error) {
      console.log(error)
    } finally {
      setLoadingCities(false)
    }
  }

  const openCityModal = () => setCityModalVisible(true)
  const closeCityModal = () => setCityModalVisible(false)

  const selectCity = async (city: CityElement) => {
    try {
      openCityModal()
      setLoadingCity(true)
      const body = {
        city: city.name,
        lon: city.lon.toString(),
        lat: city.lat.toString(),
      }
      const response = await fetch(`${API_URL}/weather`, {
        method: 'POST',
        body: JSON.stringify(body),
        headers: {
          'Content-Type': 'application/json',
        },
      })
      if (!response.ok) throw new Error('Could not load selected city')
      const data = await response.json()
      setSelectedCity(data)
    } catch (error) {
      console.log(error)
    } finally {
      setLoadingCity(false)
    }
  }

  return (
    <Container>
      <Content>
        <Title>Travel Guide</Title>
        <SearchInput
          placeholder='Lima, Perú'
          value={cityName}
          onChange={changeCityName}
          onKeyUp={searchCity}
        />
        <List loading={loadingCities} cities={cities} selectCity={selectCity} />
      </Content>
      <Modal
        visible={cityModalVisible}
        closeModal={closeCityModal}
        containerStyle={{
          backgroundColor: 'transparent',
          padding: 0,
        }}
      >
        <Card loading={loadingCity} city={selectedCity} />
      </Modal>
    </Container>
  )
}

export default App
