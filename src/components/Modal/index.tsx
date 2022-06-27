import { CSSProperties, FC, ReactNode } from 'react'
import { createPortal } from 'react-dom'

interface ModalProps {
  visible: boolean
  children?: ReactNode
  containerStyle?: CSSProperties
  closeModal?: () => void
}

const modalRoot = document.getElementById('modal-root') as HTMLElement

const Modal: FC<ModalProps> = (props) => {
  const { visible, children, closeModal, containerStyle } = props

  if (!visible) return null

  return createPortal(
    <div
      style={{
        zIndex: 1300,
        backgroundColor: 'rgba(0, 0, 0, 0.6)',
        position: 'fixed',
        top: 0,
        bottom: 0,
        left: 0,
        right: 0,
      }}
      onClick={closeModal}
    >
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
          width: '90%',
          maxWidth: 700,
          overflowY: 'auto',
          ...(containerStyle && containerStyle),
        }}
        onClick={(event) => event.stopPropagation()}
      >
        {children}
      </div>
    </div>,
    modalRoot
  )
}

export default Modal
