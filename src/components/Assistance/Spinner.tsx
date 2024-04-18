import styled from 'styled-components'

export default function Spinner() {
  return <Wrapper />
}

const Wrapper = styled.div`
  width: 5rem;
  height: 5rem;
  border: 5px solid var(--gray-400);
  border-radius: 50%;
  border-top-color: var(--primary-500);
  animation: spinner 2s linear infinite;
  margin: 10rem auto;
  @keyframes spinner {
    to {
      transform: rotate(360deg);
    }
  }
`
