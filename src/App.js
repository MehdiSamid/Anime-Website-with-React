import {Header , Footer,Hero, MostPopular} from './Sections'
import {Container} from './Components'
const App = ()=>{
  return <>
  <Header />
  <Container>
      <Hero/>
      <MostPopular/>
  </Container>

  {/* <Footer/> */}
  
  </>
}
export default App
