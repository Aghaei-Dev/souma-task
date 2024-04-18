import styled from 'styled-components'

type Props = {
  text: string
}
export default function Chip({ text }: Props) {
  return <Wrapper># {text} </Wrapper>
}

const Wrapper = styled.span`
  background: var(--primary-50);
  color: var(--primary-600);
  border-radius: var(--half-radius);
  padding: 4px 10px;
`
