import { ReactNode } from 'react'
import styled from 'styled-components'

type Props = {
  variant: 'outlined' | 'contained'
  radius?: string
  disable?: boolean
  icon?: ReactNode
  children: ReactNode
}
export default function Button({
  radius = 'var(--radius)',
  disable = false,
  variant,
  children,
}: Props) {
  return (
    <Wrapper radius={radius} disable={disable} variant={variant}>
      {children}
    </Wrapper>
  )
}

const Wrapper = styled.button<Props>`
  display: flex;
  min-width: 100px;
  justify-content: center;
  align-items: center;
  background: ${(props) =>
    props.disable
      ? 'transparent'
      : props.variant === 'contained'
      ? 'var(--primary-500)'
      : 'transparent'};
  border-radius: ${(props) => props.radius};
  border: ${(props) =>
    props.variant === 'contained' ? 'none' : '1px solid var(--primary-500)'};
  outline: none;
  cursor: pointer;
  padding: 0.8rem;
  font-weight: bold;
  color: ${(props) =>
    props.disable
      ? '#969695'
      : props.variant === 'contained'
      ? 'var(--white)'
      : 'var(--primary-500)'};
`
