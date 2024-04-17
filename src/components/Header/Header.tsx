import styled from 'styled-components'
import { logo } from '../../assets/images'
import { Button } from '../'
import { links } from '../../assets/constants'
import { Bars } from '../../assets/icons'
import SubMenu from './SubMenu'
export default function Header() {
  return (
    <Wrapper>
      <div className='fixed-width'>
        <Button variant='contained'>ورود</Button>
        <SubMenu />
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
      &:hover {
        .sub-menu {
          background: red;
        }
      }
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
