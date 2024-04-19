import { ChangeEvent } from 'react'
import styled from 'styled-components'
type Props = {
  labelText: string
  name: string
  value: string
  handleChange: (e: ChangeEvent) => void
  list: { text: string; value: number }[]
}
export default function SelectBox({
  labelText,
  name,
  value,
  handleChange,
  list,
}: Props) {
  return (
    <Wrapper>
      <select
        name={name}
        id={name}
        value={value}
        onChange={handleChange}
        className='form-select'
        autoComplete='off'
        required={true}
      >
        {list.map((item, index) => {
          const { text, value } = item
          return (
            <option key={index} value={value}>
              {text}
            </option>
          )
        })}
      </select>
      <label htmlFor={name}> {labelText || name}</label>
    </Wrapper>
  )
}

const Wrapper = styled.div`
  font-family: inherit;
  width: 100%;
  position: relative;
  direction: rtl;
  min-width: 220px;
  select {
    font-size: 100%;
    padding: 0.3rem 0.8rem;
    outline: none;
    border: 1px solid var(--gray-100);
    background-color: transparent;
    border-radius: var(--half-radius);
    width: 100%;
    &:focus ~ label,
    &:valid ~ label {
      transform: translateY(-50%) scale(0.9);
      margin: 0em;
      margin-right: 1.3em;
      padding: 0.4em;
      background-color: var(--white);
      border-color: var(--primary-500);
    }

    &:focus {
      border-color: var(--primary-500);
    }
    font-family: inherit;
  }

  label {
    font-size: 100%;
    position: absolute;
    right: 0;
    padding: 0.8em;
    margin-right: 0.5em;
    pointer-events: none;
    transition: all 0.3s ease;
    color: rgb(100, 100, 100);
  }
`
