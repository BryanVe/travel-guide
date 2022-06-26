import styled from 'styled-components'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'

export const Spinner = styled(FontAwesomeIcon)`
  font-size: 3.5rem;
  color: #39d093;
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
