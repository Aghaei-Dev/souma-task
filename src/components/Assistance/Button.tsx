import { ReactNode } from 'react'
import styled from 'styled-components'

type Props = {
  variant: 'outlined' | 'contained'
  radius?: string
  disable: boolean
  icon?: ReactNode
  children: ReactNode
}
export default function Button({
  radius = 'var(--radius)',
  disable = false,
  children,
}: Props) {
  return (
    <Wrapper radius={radius} disable={disable}>
      {children}
    </Wrapper>
  )
}

const Wrapper = styled.button<Props>`
  display: flex;
  align-items: center;
  background: ${(props) =>
    props.disable ? 'transparent' : 'var(--primary-500)'};
  border-radius: ${(props) => props.radius};
  border: none;
  outline: none;
  cursor: pointer;
  padding: 10px;
  font-weight: bold;
  color: ${(props) => (props.disable ? '#969695' : 'var(--white)')};
`
