import styled from 'styled-components'
import { Button, Chip, Input } from '../'

export default function FilterForm({ isModal }) {
  return (
    <Wrapper>
      {!isModal && <h3>فیلتر</h3>}
      <Input placeholder='جستجوی عبارت' />
      <Input placeholder='جستجوی هشتگ' />
      <div className='flex'>
        <Chip />
        <Chip />
      </div>
      <Input placeholder='مرجع' />

      <Button variant='outlined'>اعمال فیلتر</Button>
    </Wrapper>
  )
}

const Wrapper = styled.aside`
  position: sticky;
  top: 105px;
  display: flex;
  flex-direction: column;
  border-radius: var(--radius);
  align-self: self-start;
  background: red;
  height: 100%;
  /* border: 1px solid #e5e5e5; */
  padding: 1rem;
  gap: 1rem;
  .flex {
    display: flex;
    gap: 10px;
  }
  button {
    justify-self: end;
  }
`
