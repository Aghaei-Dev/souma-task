import styled from 'styled-components'
type Props = {
  placeholder: string
}
export default function Input({ placeholder }: Props) {
  return <Wrapper type='text' name='' id='' placeholder={placeholder}/>
}

const Wrapper = styled.input`
  width: 100%;
`
