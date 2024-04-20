import styled from 'styled-components'
import { Button, Chip, Input, SelectBox } from '../'
import { ChangeEvent, useEffect } from 'react'
import { useAppSelector, useAppDispatch } from '../../hooks'
import {
  clearFilters,
  getAllPosts,
  handleChange,
} from '../../features/post/postSlice'
import { closeModal } from '../../features/global/globalSlice'

export default function FilterForm() {
  const { isModalOpen } = useAppSelector((state) => state.global)
  const { filterNumber, tagList, contentSearch, sourceType } = useAppSelector(
    (state) => state.post
  )
  const dispatch = useAppDispatch()
  useEffect(() => {
    if (isModalOpen) {
      document.body.style.height = '100vh'
      document.body.style.overflow = 'hidden'
    } else {
      document.body.style.height = 'auto'
      document.body.style.overflowY = 'auto'
    }
  }, [isModalOpen])

  const handleFilter = (e: ChangeEvent) => {
    dispatch(handleChange({ name: e.target.name, value: e.target.value }))
  }

  const handleSubmit = (e: ChangeEvent): void => {
    e.preventDefault()
    dispatch(
      getAllPosts({
        excelProperties: [],
        skip: 0,
        take: 0,
        // fromDate: '',
        // toDate: '',
        exportType: 0,
        contentSearch,
        // visitCountMax: 0,
        // visitCountMin: 0,
        sourceTypes: Number(sourceType),
        tagList: [],
        contentType: 0,
        isActive: true,
        includeFile: true,
      })
    )
    dispatch(clearFilters())
    dispatch(closeModal())
  }
  return (
    <Wrapper isModalOpen={isModalOpen}>
      {!isModalOpen && <h3>فیلتر</h3>}
      {isModalOpen && filterNumber > 0 && (
        <span
          onClick={() => {
            dispatch(clearFilters())
          }}
        >
          حذف فیلترها ( {filterNumber} مورد )
        </span>
      )}

      <form onSubmit={handleSubmit}>
        <Input
          labelText='جستجوی عبارت'
          type='text'
          name='contentSearch'
          value={contentSearch}
          handleChange={handleFilter}
        />
        <div className='col'>
          <Input
            labelText='جستجوی هشتگ'
            type='text'
            name='tagList'
            value={tagList}
            handleChange={handleFilter}
          />
          <div className='flex'>
            <Chip text='بورس' />
            <Chip text='بورس' />
          </div>
        </div>
        <SelectBox
          labelText='مرجع'
          name='sourceType'
          value={sourceType}
          handleChange={handleFilter}
          list={[
            { text: '', value: 0 },
            { text: 'داخلی', value: 1 },
            { text: 'مهرنیوز', value: 2 },
          ]}
        />
        <Button variant='outlined' type='submit'>
          اعمال فیلتر
        </Button>
      </form>
    </Wrapper>
  )
}

const Wrapper = styled('aside')<{ isModalOpen: boolean }>`
  position: ${(props) => !props.isModalOpen && 'sticky'};
  top: 125px;

  border-radius: ${(props) => !props.isModalOpen && 'var(--radius)'};
  align-self: self-start;
  height: ${(props) => props.isModalOpen && '90vh'};
  border: ${(props) => !props.isModalOpen && '1px solid #e5e5e5'};

  padding: 1rem;
  form {
    padding: 1rem 0 0;
    height: 100%;
    display: flex;
    flex-direction: column;
    gap: ${(props) => (props.isModalOpen ? '2rem' : '1rem')};
  }
  > span {
    cursor: pointer;
    display: flex;
    justify-content: end;
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
