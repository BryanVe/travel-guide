import React, { FC } from 'react'
import styled from 'styled-components'

import { Currencies, Actions, Weather, Humidity } from 'components'
import { formatDate } from 'utils'

const Content = styled.div`
  display: grid;
  align-self: center;
  justify-self: center;
  padding: 32px;
  border-radius: 10px;
  background-color: #39d093;
`

const Title = styled.span`
  font-size: 4rem;
  color: #fff;
`

interface CardProps {
  city: City
}

const Card: FC<CardProps> = (props) => {
  const { city } = props

  return (
    <Content>
      <Title>{`${city.title}, ${city.country}`}</Title>
      <span>{formatDate(city.date)}</span>
      <Currencies city={city} />
      <div
        style={{
          display: 'flex',
          justifyContent: 'space-between',
          alignItems: 'center',
        }}
      >
        <Weather city={city} />
        <Humidity city={city} />
      </div>
      <Actions city={city} />
    </Content>
  )
}

export default Card
