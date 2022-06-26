import styled from 'styled-components'

import { Card, List, Modal, SearchInput } from 'components'
import { useState } from 'react'

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

const mockedCities: CityElement[] = [
  {
    title: 'Buenos Aires',
    lat: -34.6075682,
    lng: -58.4370894,
  },
  {
    title: 'Buenos Aires',
    lat: -34.6075682,
    lng: -58.4370894,
  },
  {
    title: 'Buenos Aires',
    lat: -34.6075682,
    lng: -58.4370894,
  },
  {
    title: 'Buenos Aires',
    lat: -34.6075682,
    lng: -58.4370894,
  },
  {
    title: 'Buenos Aires',
    lat: -34.6075682,
    lng: -58.4370894,
  },
  {
    title: 'Buenos Aires',
    lat: -34.6075682,
    lng: -58.4370894,
  },
  {
    title: 'Buenos Aires',
    lat: -34.6075682,
    lng: -58.4370894,
  },
  {
    title: 'Buenos Aires',
    lat: -34.6075682,
    lng: -58.4370894,
  },
  {
    title: 'Buenos Aires',
    lat: -34.6075682,
    lng: -58.4370894,
  },
]

const mockedCity: City = {
  title: 'Buenos Aires',
  description:
    'Lima es la capital y una megalópolis de la República del Perú.[7] Se encuentra situada en la costa central del país, a orillas del océano Pacífico, conformando una extensa y poblada área urbana conocida como Lima Metropolitana de 70 km norte a sur, desde el distrito de Ancón hasta el distrito de Pucusana, y 44 km este a oeste, desde el distrito de La Punta hasta Chosica (distrito de Lurigancho-Chosica), flanqueada por el desierto costero y extendida sobre los valles de los ríos Chillón, Rímac y Lurín. Según proyecciones del INEI al año 2020, la ciudad de Lima cuenta con más de 11 millones de habitantes,[1] mientras que Lima Metropolitana bordea los 11 millones de habitantes (el 32 % de la población peruana), cifras que la convierten en la ciudad más poblada del país. \nEl 18 de enero de 1535, fue fundada con el nombre de Ciudad de los Reyes por el conquistador español Francisco Pizarro dentro de la región agrícola conocida por los indígenas como Lima, nombre que adquirió con el tiempo.[8] Fue la capital del virreinato del Perú por sus valles y su baja altitud sobre el nivel del mar en reemplazo de Jauja, que se encuentra en las alturas de los Andes. El virreinato, en su momento, fungió como la entidad administrativa más relevante de la Monarquía Hispánica dentro de América del Sur, mientras que Lima a su vez fue la ciudad más grande e importante en toda América Austral durante el periodo colonial. Después del proceso de independencia, pasó a ser la capital de los departamentos libres y, posteriormente, de la república peruana.[9] También fue capital del Estado Nor-Peruano, además de que fue inicialmente la capital de la Confederación Perú-Boliviana.\nLima es la sede de la institución más antigua de educación superior en el Nuevo Mundo, la Universidad Nacional Mayor de San Marcos, fundada el 12 de mayo de 1551 durante el régimen virreinal español, es la universidad más antigua, reconocida e importante del Perú.[10] Además, la primera fundada oficialmente y la más antigua en funcionamiento continuo en América.[11][12]\nPor otro lado, Lima Metropolitana está dividida en cincuenta distritos en total, donde la provincia de Lima cuenta con cuarenta y tres distritos y la provincia constitucional del Callao con siete distritos, ambas provincias cuentan con autonomía regional desde el año 2002. También esta organizado en conos o ejes de la ciudad: Lima Norte, Lima Sur, Lima Este, Lima Centro y el Callao.\nEn la actualidad, está considerada como el centro político, económico, industrial, cultural, financiero y comercial del país. En el plano internacional, actualmente es la quinta ciudad más grande de América Latina, la cuarta por PBI y la quinta por número de habitantes, la ciudad más grande del Pacífico sudamericano, la más poblada de la Comunidad Andina de Naciones, la segunda de la Alianza del Pacífico, la tercera área metropolitana más poblada de Hispanoamérica, además, la ciudad ocupa el cuarto lugar dentro de las ciudades más pobladas de América del Sur y es una de las treinta aglomeraciones urbanas más pobladas del mundo.[13] Por su importancia geoestratégica, ha sido definida como una ciudad global de «clase beta+».[14]\nEn octubre de 2013, Lima fue elegida para albergar los Juegos Panamericanos 2019. También fue sede de la Conferencia de las Naciones Unidas sobre el Cambio Climático de diciembre de 2014, sede en 2008 y en 2016 del foro mundial APEC, del concurso Miss Universo 1982 y está programada para ser sede de la Copa Mundial de Fútbol Sub-17 de 2023.',
  country: 'AR',
  lat: -34.6075682,
  lng: -58.4370894,
  currenISO: 'ARS',
  perDolar: 124.26,
  date: '2019-03-06T08:00:00+08:00',
  weather: {
    title: 'nubes',
    icon: '04n',
    humidity: 82,
    temperature: 15.57,
  },
}

const App = () => {
  const [cityName, setCityName] = useState('')
  const [loadingCities, setLoadingCities] = useState(false)
  const [cities, setCities] = useState<CityElement[]>()
  const [cityModalVisible, setCityModalVisible] = useState(false)

  const changeCityName = (event: React.ChangeEvent<HTMLInputElement>) =>
    setCityName(event.target.value)

  const searchCity = (event: React.KeyboardEvent<HTMLInputElement>) => {
    if (event.key !== 'Enter' || cityName.length === 0) return

    setLoadingCities(true)

    // ! Simulate fetch
    setTimeout(() => {
      setCities(mockedCities)
      setLoadingCities(false)
    }, 1000)
  }

  const openCityModal = () => setCityModalVisible(true)
  const closeCityModal = () => setCityModalVisible(false)

  const selectCity = (city: CityElement) => {
    // console.log(city)
    openCityModal()
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
        <Card city={mockedCity} />
      </Modal>
    </Container>
  )
}

export default App
