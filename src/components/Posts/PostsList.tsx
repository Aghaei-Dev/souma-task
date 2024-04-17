import React from 'react'
import styled from 'styled-components'
import { SinglePost } from '../'

export default function PostsList({ array }) {
  return (
    <Wrapper>
      {array.map((item) => {
        return <SinglePost {...item} />
      })}
    </Wrapper>
  )
}

const Wrapper = styled.section``
