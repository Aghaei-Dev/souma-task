import styled from 'styled-components'
import { Footer, Header } from './components'

export default function App() {
  return (
    <main>
      <Header />
      <Wrapper className='fixed-width'>
        <aside>s</aside>
        <div>
          <h2>خبرنامه</h2>
          Lorem ipsum dolor sit amet consectetur, adipisicing elit. Velit,
          porro! Modi eum dicta nisi sint id minus aliquid itaque voluptas
          labore laboriosam, neque harum, velit possimus ipsam eligendi
          mollitia. Quod eligendi saepe, autem tenetur ut omnis nostrum iure
          officiis tempore iusto architecto vel nihil, hic eveniet possimus quae
          quibusdam consectetur molestias doloremque facere perferendis amet.
          Iste odit adipisci nesciunt quas sit soluta facilis debitis
          recusandae, tenetur vel ab vitae consectetur deserunt dolor
          perferendis corporis nulla ex deleniti. Unde vel est deleniti totam
          quisquam. Nesciunt consectetur laboriosam vitae, rem alias facilis
          distinctio neque debitis iste natus perferendis inventore quam dolore
          aliquam.
        </div>
      </Wrapper>
      <Footer />
    </main>
  )
}
// https://mehrapi.souma-p.ir/api/v1/Content/get-contents

const Wrapper = styled.section`
  direction: rtl;
  background: blue;
  display: flex;
  padding: 2rem 0;
  gap: 3rem;
  aside {
    background: green;
    align-self: flex-start;
    width: 400px;
    height: 500px;
  }
`
