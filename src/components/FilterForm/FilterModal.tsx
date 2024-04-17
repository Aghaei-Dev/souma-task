import styled from 'styled-components'
import { Cross } from '../../assets/icons'
import Divider from '../Assistance/Divider'
import FilterForm from './FilterForm'

export default function FilterModal() {
  return (
    <Wrapper>
      <div className='row'>
        <h2>فیلتر ها</h2>
        <Cross />
      </div>
      <Divider />
      <FilterForm isModal />
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
  }
  aside {
    padding: 1rem 2rem;
  }
`
