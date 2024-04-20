import styled from 'styled-components'
import { logo } from '../../assets/images'
import { links } from '../../assets/constants'
import { Bars } from '../../assets/icons'
import { Button } from '../'
export default function Header() {
  return (
    <Wrapper>
      <div className='fixed-width'>
        <Button variant='contained' type='button'>
          ورود
        </Button>
        <Bars />
        <nav>
          <ul>
            {links.map((item) => {
              const { id, href, text } = item
              return (
                <li key={id}>
                  <a href={href}>{text}</a>
                </li>
              )
            })}
          </ul>
        </nav>
        <img src={logo} alt='logo' />
      </div>
    </Wrapper>
  )
}

const Wrapper = styled.header`
  /* opacity: 0.5; */
  z-index: 100;
  border-bottom: 1px solid #f4f4f4;
  background: var(--white);
  position: sticky;
  top: 0;
  > div {
    padding: 1rem 0;
    display: flex;
    justify-content: space-between;
    align-items: center;
    button {
      position: relative;
    }
    ul {
      display: flex;
      flex-direction: row-reverse;
      justify-content: space-between;
      align-items: center;
      gap: 1rem;
      li {
        a {
          color: var(--gray-900);
          cursor: pointer;
        }
      }
    }
    @media (width <= 700px) {
      nav,
      button {
        display: none;
      }
    }
    @media (width> 700px) {
      svg {
        display: none;
      }
    }
  }
`
