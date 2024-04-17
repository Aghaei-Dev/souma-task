import React from 'react'
import styled from 'styled-components'
import { Button } from '../Assistance'
export default function DatePicker() {
  return (
    <Wrapper>
      <Button radius='var(--half-radius)' variant='contained'>
        امروز
      </Button>
      <Button disable radius='var(--half-radius)' variant='contained'>
        فروردین
      </Button>
      <Button disable radius='var(--half-radius)' variant='contained'>
        فروردین
      </Button>
      <Button disable radius='var(--half-radius)' variant='contained'>
        فروردین
      </Button>
      <Button disable radius='var(--half-radius)' variant='contained'>
        فروردین
      </Button>
      <Button disable radius='var(--half-radius)' variant='contained'>
        فروردین
      </Button>
    </Wrapper>
  )
}
const Wrapper = styled.section`
  background: #f4f4f4;
  padding: 0.5rem;
  border-radius: var(--half-radius);
  width: 100%;
  display: block;
  align-self: stretch;
  justify-self: stretch;
  display: flex;
  justify-content: space-between;
  align-items: center;
`
