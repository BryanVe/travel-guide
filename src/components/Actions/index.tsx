import React, { FC, useState } from 'react'
import { faMap, faAlignJustify } from '@fortawesome/free-solid-svg-icons'

import { Button, Modal } from '..'
import { cleanText, sliceText } from 'utils'

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
      <Button
        label='Ver descripción'
        icon={faAlignJustify}
        onClick={openDescriptionModal}
      />
      <Button
        link
        label='Ver en mapa'
        icon={faMap}
        href={`https://www.google.com/maps/place/${city.lat},${city.lng}`}
      />
      <Modal
        visible={descriptionModalVisible}
        closeModal={closeDescriptionModal}
      >
        {sliceText(cleanText(city.description), 300)}
        <Button
          label='Cerrar'
          onClick={closeDescriptionModal}
          style={{
            marginTop: 16,
          }}
        />
      </Modal>
    </div>
  )
}

export default Actions
