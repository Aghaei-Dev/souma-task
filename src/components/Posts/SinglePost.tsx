import styled from 'styled-components'

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
      <h2>{title}</h2>
      <p>{text}</p>
      <div className='group'>
        <span>{view}</span>
        <time>{date}</time>
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
  img {
    border-radius: var(--half-radius);
  }
  h2 {
    color: var(--gray-800);
  }
  p {
    color: var(--gray-700);
  }
  .group {
    display: flex;
    justify-content: space-between;
    align-items: center;
  }
`
