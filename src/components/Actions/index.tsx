import React, { FC, useState } from 'react'
import { faMap, faAlignJustify } from '@fortawesome/free-solid-svg-icons'

import { Button, Modal } from '..'
import { cleanText } from 'utils'

interface ActionsProps {
  city: City
}

const Actions: FC<ActionsProps> = (props) => {
  const { city } = props
  const [descriptionModalVisible, setDescriptionModalVisible] = useState(false)

  const openDescriptionModal = () => setDescriptionModalVisible(true)
  const closeDescriptionModal = () => setDescriptionModalVisible(false)

  return (
    <div
      style={{
        marginTop: 16,
        display: 'flex',
        justifyContent: 'space-between',
      }}
    >
      {city.description && city.description.length > 0 && (
        <Button
          label='Ver descripción'
          icon={faAlignJustify}
          onClick={openDescriptionModal}
        />
      )}
      <Button
        link
        label='Ver en mapa'
        icon={faMap}
        href={`https://www.google.com/maps/place/${city.lat},${city.lng}`}
      />
      {city.description && city.description.length > 0 && (
        <Modal
          visible={descriptionModalVisible}
          closeModal={closeDescriptionModal}
        >
          {cleanText(city.description)}
          <Button
            label='Cerrar'
            onClick={closeDescriptionModal}
            style={{
              marginTop: 16,
            }}
          />
        </Modal>
      )}
    </div>
  )
}

export default Actions
