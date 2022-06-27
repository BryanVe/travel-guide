import { FC } from 'react'
import { faSpinner } from '@fortawesome/free-solid-svg-icons'

import { Spinner } from './style'

interface LoadingProps {
  spinnerColor: string
  color?: string
}

const Loading: FC<LoadingProps> = (props) => {
  const { spinnerColor, color = '#000' } = props
  return (
    <div
      style={{
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        justifyContent: 'center',
        margin: '50px 0',
        height: 150,
      }}
    >
      <Spinner icon={faSpinner} color={spinnerColor} />
      <span
        style={{
          marginTop: 24,
          fontSize: 20,
          textAlign: 'center',
          color,
        }}
      >
        Cargando
      </span>
    </div>
  )
}

export default Loading
