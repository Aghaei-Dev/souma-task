import styled from 'styled-components'
import { Button, Chip, Input } from '../'

export default function FilterForm() {
  return (
    <Wrapper>
      <h3>فیلتر</h3>
      <Input placeholder='جستجوی عبارت' />
      <Input placeholder='جستجوی هشتگ' />
      <div className='flex'>
        <Chip />
        <Chip />
      </div>
      <Input placeholder='مرجع' />

      <Button variant='contained'>اعمال فیلتر</Button>
    </Wrapper>
  )
}

const Wrapper = styled.aside`
  display: flex;
  flex-direction: column;
  border-radius: var(--radius);

  border: 1px solid #e5e5e5;
  padding: 1rem;
  gap: 1rem;
  .flex {
    display: flex;
    gap: 10px;
  }
`
