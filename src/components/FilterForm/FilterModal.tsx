import styled from 'styled-components'
import { useDispatch } from 'react-redux'

import { Cross } from '../../assets/icons'
import { FilterForm, Divider } from '../'

import { closeModal } from '../../features/global/globalSlice'

export default function FilterModal() {
  const dispatch = useDispatch()
  return (
    <Wrapper>
      <div className='row'>
        <h2>فیلتر ها</h2>
        <button onClick={() => dispatch(closeModal())}>
          <Cross />
        </button>
      </div>
      <Divider />
      <FilterForm />
    </Wrapper>
  )
}

const Wrapper = styled.main`
  position: fixed;
  top: 0;
  left: 0;
  width: 100dvw;
  height: 100vh;
  background: var(--white);
  z-index: 110;
  .row {
    padding: 1rem 2rem;
    display: flex;
    justify-content: space-between;
    align-items: center;
    h2 {
      font-size: 14px;
    }
    > button {
      border: none;
      padding: 0.5rem;
      background: none;
      cursor: pointer;
      * {
        cursor: pointer;
      }
    }
  }
  aside {
    padding: 1rem 2rem;
  }
`
