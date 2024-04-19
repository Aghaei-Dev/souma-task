import styled from 'styled-components'
type Props = {
  labelText: string
  type: string
  name: string
  value: string
  handleChange: (any) => void
}
export default function Input({
  type,
  name,
  value,
  handleChange,
  labelText,
}: Props) {
  return (
    <Wrapper>
      <input
        type={type}
        autoComplete='off'
        required={true}
        id={name}
        name={name}
        value={value}
        onChange={handleChange}
      />
      <label htmlFor={name}>{labelText || name}</label>
    </Wrapper>
  )
}

const Wrapper = styled.div`
  font-family: inherit;
  width: 100%;
  position: relative;
  direction: rtl;
  min-width: 220px;
  input {
    font-size: 100%;
    padding: 0.8em;
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
