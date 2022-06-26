import { faSpinner } from '@fortawesome/free-solid-svg-icons'

import { Spinner } from './style'

const Loading = () => {
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
      <Spinner icon={faSpinner} />
      <span
        style={{
          marginTop: 24,
          fontSize: 20,
          textAlign: 'center',
        }}
      >
        Cargando
      </span>
    </div>
  )
}

export default Loading
