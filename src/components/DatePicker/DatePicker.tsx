const dates = [
  { id: 0, text: '۱۱ فروردین' },
  { id: 1, text: '۱۲ فروردین' },
  { id: 2, text: '۱۳ فروردین' },
  { id: 3, text: '۱۴ فروردین' },
  { id: 4, text: '۱۵ فروردین' },
  { id: 5, text: '۱۶فروردین' },
  { id: 6, text: 'امروز' },
]
import { useEffect, useRef, useState } from 'react'
import styled from 'styled-components'

export default function DatePicker() {
  const wrapperRef = useRef(null)

  const [page, setPage] = useState(dates.length - 1)
  const [width, setWidth] = useState(0)

  useEffect(() => {
    if (wrapperRef.current) {
      setWidth(wrapperRef.current.firstChild.getBoundingClientRect().width)
    }
  }, [])

  const styles = {
    page,
    width,
    length: dates.length,
  }

  return (
    <Wrapper styles={styles}>
      <ul ref={wrapperRef}>
        {dates.reverse().map((item) => {
          const { id, text } = item
          return (
            <div
              className={`${page === id ? 'active' : ''}`}
              key={id}
              onClick={() => {
                setPage(id)
              }}
            >
              {text}
            </div>
          )
        })}
      </ul>
    </Wrapper>
  )
}
const Wrapper = styled('nav')(({ styles: { width, page } }) => ({
  ul: {
    position: 'relative',
    padding: '0.75rem',
    borderRadius: 'var(--half-radius)',
    listStyleType: 'none',
    display: 'flex',
    justifyContent: 'space-between',
    alignItems: 'center',
    background: 'var(--gray-50)',
    transition: '.4s left',
    overflow: 'hidden',
    zIndex: 0,

    '::before': {
      content: "''",
      position: 'absolute',
      width: width,
      height: '75%',
      background: 'var(--primary-500)',
      top: '0',
      left: `${width * page + 9}px`,
      transition: '.4s left',
      zIndex: -1,
      borderRadius: 'var(--half-radius)',
      transform: 'translate(0%,18%)',
    },
  },
  div: {
    color: 'var(--gray-500)',
    textAlign: 'center',
    width: '100%',
    height: '100%',
    transition: '.3s all',
    display: 'flex',
    alignItems: 'center',
    flexDirection: 'column',
    justifyContent: 'center',
    gap: '.5rem',
    cursor: 'pointer',
    '* , >*': {
      cursor: 'pointer',
    },
  },
  '.active': {
    color: 'var(--white)',
  },
  '*, >*': {
    direction: 'ltr',
  },

  ' @media (width<=850px)': {
    display: 'none',
  },
}))
