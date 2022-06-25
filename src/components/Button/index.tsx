import { FC, CSSProperties } from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { IconDefinition } from '@fortawesome/free-solid-svg-icons'

import { StyledA, StyledSpan } from './style'

interface ButtonProps {
  link?: boolean
  href?: string
  icon?: IconDefinition
  label: string
  onClick?: () => void
  style?: CSSProperties
}

const Button: FC<ButtonProps> = (props) => {
  const { link, href, label, icon, onClick, style } = props

  const _icon = icon && (
    <FontAwesomeIcon
      icon={icon}
      style={{
        marginLeft: 10,
      }}
    />
  )

  return link ? (
    <StyledA
      href={href}
      target='_blank'
      rel='noopener noreferrer'
      style={style}
    >
      {label}
      {_icon}
    </StyledA>
  ) : (
    <StyledSpan onClick={onClick} style={style}>
      {label}
      {_icon}
    </StyledSpan>
  )
}

export default Button
