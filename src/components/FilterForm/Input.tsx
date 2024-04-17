import styled from 'styled-components'
type Props = {
  placeholder: string
}
export default function Input({ placeholder }: Props) {
  return (
    <Wrapper className='inputGroup'>
      <input type='text' autoComplete='off' required={true} />
      <label htmlFor='name'>{placeholder}</label>
    </Wrapper>
  )
}

const Wrapper = styled.div`
  font-family: 'Segoe UI', sans-serif;
  margin: 1em 0 1em 0;
  width: 400px;
  position: relative;
  direction: rtl;
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
