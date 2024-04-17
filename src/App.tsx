import styled from 'styled-components'
import { Footer, Header, PostsList, DatePicker, FilterForm } from './components'
import { useEffect, useState } from 'react'

export default function App() {
  const array = [
    {
      id: 1,
      title: 'پیش بینی معاملات بورس ۳۱ تیر ۱۴۰۲/ احتمال عرضه سنگین در شنبه',
      text: 'انتظار می رود در ابتدای معاملات روز شنبه بازار سرمایه با یک عرضه سنگین مواجه شود.انتظار می رود در ابتدای معاملات روز شنبه بازار سرمایه با یک عرضه سنگین مواجه شود.',
      img: '',
      date: '1402/05/01 - 10:36:09',
      view: '326',
    },
  ]
  return (
    <main>
      <Header />
      <Wrapper className='fixed-width'>
        <FilterForm />
        <div>
          <h2>خبرنامه</h2>
          <DatePicker />
          <PostsList array={array} />
        </div>
      </Wrapper>
      <Footer />
    </main>
  )
}

const Wrapper = styled.section`
  direction: rtl;
  /* background: #dcdcff; */
  display: flex;
  padding: 2rem 0;
  gap: 3rem;
  > div {
    width: 100%;
  }
`
