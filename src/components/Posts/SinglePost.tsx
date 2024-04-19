import styled from 'styled-components'
import { Eye } from '../../assets/icons'
import { lengthChecker } from '../../functions'

type Props = {
  title: string
  brief: string

  visitCount: string
  fileContent: string
  publishDate: string
}
export default function SinglePost({
  title,
  brief,
  visitCount,
  fileContent,
  publishDate,
}: Props) {
  const humanReadable = publishDate.split('T')
  return (
    <Wrapper>
      <img src={fileContent} alt={title} />
      <div>
        <h5>{title}</h5>
        <p>{window.innerWidth <= 500 ? lengthChecker(brief, 200) : brief}</p>
      </div>
      <div className='group'>
        <time>
          {humanReadable[1].slice(0, 8)} - {humanReadable[0]}
        </time>
        <span>
          {visitCount}
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
  min-height: 340px;
  border-radius: var(--half-radius);
  transition: var(--transition);
  overflow: hidden;

  img {
    border-radius: var(--half-radius);
    object-fit: cover;
    width: 100%;
    height: 200px;
  }
  div {
    transition: var(--transition);
    font-size: 12px;

    h5 {
      transition: var(--transition);

      color: var(--gray-800);
    }
    p {
      transition: var(--transition);

      color: var(--gray-700);
    }
  }
  .group {
    display: flex;
    justify-content: space-between;
    align-items: center;
    margin-top: auto;
    time {
      direction: rtl;
    }
    span {
      display: flex;
      justify-content: space-between;
      align-items: center;
      gap: 5px;
    }
  }
  &:hover {
    border-color: var(--primary-500);
    h5,
    p {
      padding-top: 0.2rem;
    }
  }
  @media (width<=500px) {
    display: grid;
    grid-template-columns: auto auto;
    grid-template-rows: auto auto;
    padding: 0;
    column-gap: 0.75rem;
    row-gap: 0;
    height: 147px;
    min-height: unset;
    img {
      border-radius: 0;
      width: 129px;
      height: 119px;
    }
    div {
      padding: 5px;
      /* background: red; */
    }
    .group {
      padding: 5px;
      grid-column: 2 span;
      background: var(--gray-50);
    }
  }
`
