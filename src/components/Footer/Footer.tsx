import styled from 'styled-components'
import { SubFooter } from '../'
import { e_namad, logo } from '../../assets/images'
import {
  AtSign,
  Bale,
  Instagram,
  Location,
  Phone,
  Telegram,
  Twitter,
} from '../../assets/icons'

export default function Footer() {
  return (
    <Wrapper>
      <section className='fixed-width'>
        <img src={logo} alt='logo' />

        <div className='content'>
          <article>
            <h4>دسترسی سریع</h4>

            <a href=''>راهنمای سرمایه گذار حرفه ای</a>
            <a href=''>راهنمای سرمایه گذاری در بورس</a>
            <a href=''>شعب و دفاتر مهر اقتصاد</a>
            <a href=''>شعب و دفاتر مهر اقتصاد</a>
          </article>

          <article>
            <h4>لینک های مفید</h4>
            <a href=''>سازمان بورس و اوراق بهادار</a>
            <a href=''>دنیای اقتصاد</a>
            <a href=''>شبکه کدال</a>
            <a href=''>شرکت مدیریت فناوری بورس</a>
          </article>

          <article>
            <h4>نماس با ما</h4>
            <Row>
              <Location />
              تهران، خیابان استاد مطهری خیابان میرزای شیرازی، کوچه هفدهم، پلاک
              ۱۷
            </Row>

            <Row>
              <Phone />
              ۰۲۱-۴۲۹۱۹۰۰۰
            </Row>
            <Row>
              <AtSign />
              info@meibours.ir
            </Row>
          </article>

          <article className='group'>
            <div className='social-links'>
              <p>با ما باشید</p>
              <div className='links'>
                <Instagram />
                <Bale />
                <Telegram />
                <Twitter />
              </div>
            </div>
            <div className='e_namad'>
              <p>دقیق و امن، با مهر همراه شما هستیم</p>
              <img src={e_namad} alt='' />
            </div>
          </article>
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

    img {
      filter: grayscale(1);
      opacity: 0.8;
    }
    .content {
      margin-top: 2rem;
      display: flex;
      flex-direction: column;
      justify-content: space-between;
      gap: 2rem;
      article {
        display: flex;
        flex-direction: column;
        justify-content: space-between;
        gap: 0.5rem;
      }
      .group {
        display: flex;
        flex-direction: row;
        justify-content: space-around;
        text-align: center;
        .links {
          display: grid;
          grid-template-columns: 1fr 1fr;
          justify-content: center;
          gap: 0.5rem;
          align-items: center;

          svg {
            justify-self: center;
            width: 30px;
            height: 30px;
            align-self: center;
          }
        }
      }
      /* here */
      @media (width>=800px) {
        flex-direction: row;
        .group {
          flex-direction: column;
          .links {
            display: flex;
          }
        }
      }
    }
  }
`

const Row = styled.a`
  display: flex;
  align-items: center;
  justify-content: start;
  gap: 1rem;
`
