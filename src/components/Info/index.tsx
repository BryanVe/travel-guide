import { FC } from 'react'

interface InfoProps {
  message: string
  src: string
}

const Info: FC<InfoProps> = (props) => {
  const { src, message } = props

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
      <img
        alt={message}
        src={src}
        style={{
          height: 70,
        }}
      />
      <span
        style={{
          marginTop: 24,
          fontSize: 20,
          textAlign: 'center',
        }}
      >
        {message}
      </span>
    </div>
  )
}

export default Info
