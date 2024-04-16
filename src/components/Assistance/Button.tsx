import { ReactNode } from 'react'
import styled from 'styled-components'

type Props = {
  variant: 'outlined' | 'contained'

  icon?: ReactNode
  children: ReactNode
}
export default function Button({ children }: Props) {
  return <Wrapper>{children}</Wrapper>
}

const Wrapper = styled.button`
  display: flex;
  align-items: center;
  background: var(--primary-500);
  border-radius: var(--radius);
  border: none;
  outline: none;
  cursor: pointer;
  padding: 10px;
  color: var(--white);
`
