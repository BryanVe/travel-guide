import styled from 'styled-components'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'

interface SpinnerProps {
  color: string
}

export const Spinner = styled(FontAwesomeIcon)<SpinnerProps>`
  font-size: 3.5rem;
  color: ${(props) => props.color};
  animation: rotation 1s infinite linear;

  @keyframes rotation {
    from {
      transform: rotate(0deg);
    }
    to {
      transform: rotate(359deg);
    }
  }
`
