import { FC } from 'react'
import styled from 'styled-components'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faMagnifyingGlass } from '@fortawesome/free-solid-svg-icons'

const Input = styled.input`
  border: none;
  padding: 16px;
  font-size: 16px;
  font-family: Poppins;
  flex-grow: 1;
  width: inherit;

  &:focus {
    outline: none;
  }
`

interface SearchInputProps {
  placeholder?: string
  value: string
  onChange?: (event: React.ChangeEvent<HTMLInputElement>) => void
  onKeyUp?: (event: React.KeyboardEvent<HTMLInputElement>) => void
}

const placeholderColor = '#757575'

const SearchInput: FC<SearchInputProps> = (props) => {
  const { placeholder, value, onChange, onKeyUp } = props

  return (
    <div
      style={{
        borderRadius: 24,
        padding: '0 24px',
        backgroundColor: '#fff',
        marginTop: 16,
        display: 'flex',
        maxWidth: 300,
        width: '80%',
        alignItems: 'center',
      }}
    >
      <label htmlFor='search-input'>
        <FontAwesomeIcon
          icon={faMagnifyingGlass}
          style={{
            fontSize: '1rem',
            color: placeholderColor,
          }}
        />
      </label>
      <Input
        autoFocus
        id='search-input'
        type='text'
        spellCheck={false}
        value={value}
        placeholder={placeholder}
        onChange={onChange}
        onKeyUp={onKeyUp}
      />
    </div>
  )
}

export default SearchInput
