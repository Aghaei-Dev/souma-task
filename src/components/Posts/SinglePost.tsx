import styled from 'styled-components'
import { Eye } from '../../assets/icons'

type Props = {
  title: string
  text: string
  date: string
  view: string
  img: string
}
export default function SinglePost({ title, text, date, view, img }: Props) {
  return (
    <Wrapper>
      <img src={img} alt={title} />
      <div>
        <h2>{title}</h2>
        <p>{text}</p>
      </div>
      <div className='group'>
        <time>{date}</time>
        <span>
          {view}
          <Eye />
        </span>
      </div>
    </Wrapper>
  )
}
const Wrapper = styled.article`
  display: flex;
  flex-direction: column;
  padding: 0.5rem;
  border: 1px solid #e5e5e5;
  border-radius: var(--half-radius);
  transition: var(--transition);

  img {
    border-radius: var(--half-radius);
  }
  div {
    transition: var(--transition);

    h2 {
      color: var(--gray-800);
    }
    p {
      color: var(--gray-700);
    }
  }
  .group {
    display: flex;
    justify-content: space-between;
    align-items: center;
    span {
      display: flex;
      justify-content: space-between;
      align-items: center;
      gap: 5px;
      svg {
        background: red;
      }
    }
  }
  &:hover {
    border-color: var(--primary-500);
    div {
      padding-top: 0.5rem;
    }
  }
`
