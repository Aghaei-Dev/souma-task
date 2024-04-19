import styled from 'styled-components'
import { useEffect } from 'react'

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
import { useAppDispatch, useAppSelector } from './hooks'

import { openModal } from './features/global/globalSlice'
import { getAllPosts } from './features/post/postSlice'

import { defaultPayload } from './assets/constants'
import { Filters } from './assets/icons'

export default function App() {
  const { isModalOpen } = useAppSelector((state) => state.global)
  const { data } = useAppSelector((state) => state.post.post)
  const { isLoading, filterNumber } = useAppSelector((state) => state.post)
  const dispatch = useAppDispatch()

  useEffect(() => {
    dispatch(getAllPosts(defaultPayload))
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
            <button onClick={() => dispatch(openModal())}>
              <Filters />
              فیلتر ({filterNumber})
            </button>
            <Divider />
          </section>
          <DatePicker />
          {isLoading ? (
            <Spinner />
          ) : data.length > 0 ? (
            <PostsList array={data} />
          ) : (
            <h1>نداریم !!!</h1>
          )}
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
