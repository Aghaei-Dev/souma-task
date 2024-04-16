import styled from 'styled-components'
import { logo } from '../../assets/images'
import { Button } from '../'
import { links } from '../../assets/constants'
export default function Header() {
  return (
    <Wrapper>
      <div className='fixed-width'>
        <Button>ورود</Button>
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
  border-bottom: 1px solid #f4f4f4;
  background: var(--white);
  position: sticky;
  top: 0;
  > div {
    padding: 1rem 0;
    display: flex;
    justify-content: space-between;
    align-items: center;

    ul {
      background-color: red;

      display: flex;
      flex-direction: row-reverse;
      justify-content: space-between;
      align-items: center;
      gap: 10px;
      li {
        a {
          color: var(--gray-900);
          cursor: pointer;
        }
      }
    }
  }
`
