import {Header ,Footer} from './Sections'
import { Home } from './Pages/index'
import {Container} from './Components'

const App = ()=>{
  return <>
  <Header />
  <Container>
    <Home/>
      
  </Container>

  <Footer/>
  
  </>
}
export default App
