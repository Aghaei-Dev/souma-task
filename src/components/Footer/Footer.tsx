import styled from 'styled-components'
import { SubFooter } from '../'
import { e_namad, logo } from '../../assets/images'

export default function Footer() {
  return (
    <Wrapper>
      <section className='fixed-width'>
        <div className='logo'>
          <img src={logo} alt='logo' />
        </div>
        <div className='one'>
          <h4>دسترسی سریع</h4>

          <a href=''>راهنمای سرمایه گذار حرفه ای</a>
          <a href=''>راهنمای سرمایه گذاری در بورس</a>
          <a href=''>شعب و دفاتر مهر اقتصاد</a>
          <a href=''>شعب و دفاتر مهر اقتصاد</a>
        </div>
        <div className='two'>
          <h4>لینک های مفید</h4>
          <nav>
            <a href=''>سازمان بورس و اوراق بهادار</a>
            <a href=''>دنیای اقتصاد</a>
            <a href=''>شبکه کدال</a>
            <a href=''>شرکت مدیریت فناوری بورس</a>
          </nav>
        </div>
        <div className='three'>
          <h4>نماس با ما</h4>
        </div>
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
    padding: 2rem;
    display: grid;
    grid-template-rows: 2fr;
    grid-template-columns: 1fr 1fr 1fr 1fr;
    gap: 2rem;
    .logo {
      grid-column: 4 span;
      img {
        filter: grayscale(1);
        opacity: 0.8;
      }
    }
    .one {
      background: red;
      display: flex;
      flex-direction: column;
      justify-content: start;
      gap: 0.5rem;
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
