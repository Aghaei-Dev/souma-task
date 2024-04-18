import styled from 'styled-components'
import { Button, Chip, Input, SelectBox } from '../'
import { useEffect } from 'react'
import { useAppSelector } from '../../hooks'

export default function FilterForm() {
  const { isModalOpen } = useAppSelector((state) => state.global)

  useEffect(() => {
    if (isModalOpen) {
      document.body.style.height = '100vh'
      document.body.style.overflow = 'hidden'
    } else {
      document.body.style.height = 'auto'
      document.body.style.overflowY = 'auto'
    }
  }, [isModalOpen])

  return (
    <Wrapper isModalOpen={isModalOpen}>
      {!isModalOpen && <h3>فیلتر</h3>}
      {isModalOpen && <h4>حذف فیلترها ( ۲ مورد )</h4>}

      <Input placeholder='جستجوی عبارت' />
      <div className='col'>
        <Input placeholder='جستجوی هشتگ' />
        <div className='flex'>
          <Chip text='بورس' />
          <Chip text='بورس' />
        </div>
      </div>
      <SelectBox placeholder='مرجع' />
      <Button variant='outlined'>اعمال فیلتر</Button>
    </Wrapper>
  )
}

const Wrapper = styled.aside`
  position: ${(props) => !props.isModalOpen && 'sticky'};
  top: 125px;
  display: flex;
  flex-direction: column;
  border-radius: ${(props) => !props.isModalOpen && 'var(--radius)'};
  align-self: self-start;
  height: ${(props) => props.isModalOpen && '90vh'};
  border: ${(props) => !props.isModalOpen && '1px solid #e5e5e5'};

  padding: 1rem;
  gap: ${(props) => (props.isModalOpen ? '2rem' : '1rem')};
  h4 {
    align-self: flex-end;
  }
  .col {
    display: flex;
    flex-direction: column;
    gap: 0.5rem;
  }
  .flex {
    display: flex;
    gap: 10px;
  }
  button {
    margin-top: auto;
  }
  @media (width <= 700px) {
    display: ${(props) => !props.isModalOpen && 'none'};
  }
`
