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

const Wrapper = styled.section`
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(300px, 1fr));
  column-gap: 21px;
  row-gap: 40px;
  @media (width<=500px) {
    column-gap: 0px;
    row-gap: 18px;
  }
`
