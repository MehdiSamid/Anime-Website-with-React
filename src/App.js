import {Header , Footer,Hero, MostPopular,Library} from './Sections'
import {Container} from './Components'

const App = ()=>{
  return <>
  <Header />
  <Container>
      <Hero/>
      <MostPopular/>
      <Library/>
  </Container>

  {/* <Footer/> */}
  
  </>
}
export default App
