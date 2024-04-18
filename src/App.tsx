import styled from 'styled-components'
import {
  Footer,
  Header,
  PostsList,
  DatePicker,
  FilterModal,
  FilterForm,
  Divider,
  Spinner,
} from './components'

import { toggleModal } from './features/global/globalSlice'
import { useAppDispatch, useAppSelector } from './hooks'
import { getAllPosts } from './features/post/postSlice'
import { useEffect } from 'react'
import { Filters } from './assets/icons'

export default function App() {
  const { isModalOpen } = useAppSelector((state) => state.global)
  const { data } = useAppSelector((state) => state.post.post)
  const isLoading = useAppSelector((state) => state.post.loading)

  const dispatch = useAppDispatch()

  useEffect(() => {
    dispatch(getAllPosts())
    console.log(data)
    console.log(isLoading)
  }, [])

  return (
    <main>
      <Header />
      <Wrapper className='fixed-width'>
        <FilterForm />
        {isModalOpen && <FilterModal />}
        <div>
          <h2>خبرنامه</h2>
          <section className='filter'>
            <button onClick={() => dispatch(toggleModal())}>
              <Filters />
              فیلتر (2)
            </button>
            <Divider />
          </section>
          <DatePicker />
          {isLoading ? <Spinner /> : data && <PostsList array={data} />}
        </div>
      </Wrapper>
      <Footer />
    </main>
  )
}

const Wrapper = styled.section`
  direction: rtl;
  display: flex;
  padding: 2rem 0;
  gap: 3rem;
  h2 {
    font-size: 1rem;
  }
  > div {
    width: 100%;
    display: flex;
    flex-direction: column;
    gap: 1.5rem;
    section {
      button {
        display: flex;
        align-items: center;
        gap: 0.5rem;
        background: none;
        border: none;
        font-family: inherit;
      }
    }
  }
  @media (width <= 700px) {
    h2 {
      font-size: 20px;
      text-align: center;
    }
  }
  @media (width > 700px) {
    .filter {
      display: none;
    }
  }
`
