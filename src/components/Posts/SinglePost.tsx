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
        <h5>{title}</h5>
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
  gap: 1rem;
  border: 1px solid #e5e5e5;
  /* height: 340px; */
  border-radius: var(--half-radius);
  transition: var(--transition);

  img {
    border-radius: var(--half-radius);
    /* max-width: 284px; */
    object-fit: cover;
  }
  div {
    transition: var(--transition);
    font-size: 12px;

    h5 {
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
  @media (width<=500px) {
    display: grid;
    grid-template-columns: auto auto;
    grid-template-rows: auto auto;
    padding: 0;
    img {
      max-width: 130px;
      max-height: 130px;
    }
    div {
      padding: 5px;
    }
    .group {
      padding: 5px;
      grid-column: 2 span;
      background: var(--gray-50);
    }
  }
`
