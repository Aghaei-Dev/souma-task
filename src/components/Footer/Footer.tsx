import styled from 'styled-components'
import { SubFooter } from '../'
import { e_namad, logo } from '../../assets/images'

export default function Footer() {
  return (
    <Wrapper>
      <section>
        <div className='logo'>
          <img src={logo} alt='logo' />
        </div>
        <div className='one'>accesibilty</div>
        <div className='two'>links</div>
        <div className='three'>contact</div>
        <div className='group'>
          <div className='social-links'>
            <p>با ما باشید</p>
            icons
          </div>
          <div className='e-namad'>
            <p>دقیق و امن، با مهر همراه شما هستیم</p>
            <img src={e_namad} alt='' />
          </div>
        </div>
      </section>
      <SubFooter />
    </Wrapper>
  )
}

const Wrapper = styled.header`
  direction: rtl;
  background: rgba(46, 45, 43, 0.03);
  section {
    padding: 3rem;
    display: grid;
    grid-template-rows: 2fr;
    grid-template-columns: 1fr 1fr 1fr 1fr;
    .logo {
      grid-column: 4 span;
      img {
        filter: grayscale(1);
        opacity: 0.8;
      }
    }
    .one {
      background: red;
    }
    .two {
      background: black;
    }
    .three {
      background: green;
    }
    .group {
      background: red;
      display: flex;
      flex-direction: column;
      justify-content: center;
      align-items: center;
      div {
        display: flex;
        flex-direction: column;
      }
    }
  }
`
