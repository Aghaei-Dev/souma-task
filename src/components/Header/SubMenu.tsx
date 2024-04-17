import styled from 'styled-components'

export default function SubMenu() {
  return <Wrapper className='sub-menu'>s</Wrapper>
}

const Wrapper = styled('div')(() => ({
  position: 'absolute',
  bottom: '-2rem',
  width: '200px',
  border: '1px solid var(--gray-100)',
  borderRadius: 'var(--half-radius)',
  padding: '.5rem',
  height: 0,
}))
