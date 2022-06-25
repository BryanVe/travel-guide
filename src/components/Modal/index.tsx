import { FC, ReactNode } from 'react'

interface ModalProps {
  visible: boolean
  children?: ReactNode
  closeModal?: () => void
}

const Modal: FC<ModalProps> = (props) => {
  const { visible, children, closeModal } = props

  return (
    <div
      style={{
        backgroundColor: 'rgba(0, 0, 0, 0.6)',
        position: 'absolute',
        top: 0,
        left: 0,
        width: '100vw',
        height: '100vh',
        ...(!visible && {
          display: 'none',
        }),
      }}
    >
      <div
        style={{
          position: 'absolute',
          width: 'inherit',
          height: 'inherit',
        }}
        onClick={closeModal}
      />
      <div
        style={{
          zIndex: 300,
          position: 'absolute',
          left: '50%',
          top: '50%',
          transform: 'translate(-50%, -50%)',
          backgroundColor: '#fff',
          padding: 32,
          display: 'flex',
          alignItems: 'flex-end',
          flexDirection: 'column',
          maxWidth: '40%',
          maxHeight: '50%',
          overflowY: 'auto',
        }}
      >
        {children}
      </div>
    </div>
  )
}

export default Modal
