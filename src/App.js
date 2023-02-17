import {Header ,Footer} from './Sections'
import { Home , MostPopularPage } from './Pages/index'
import {Container} from './Components'

import { BrowserRouter as Router , Routes , Route } from 'react-router-dom'

const App = ()=>{
  return <>
  <Router>
    <Header />
    <Container>
      
      <Routes>

        <Route path='/' element={<Home/>} />
        <Route path='most-popular' element={<MostPopularPage/>} />

      </Routes>

    </Container>

    <Footer/>
  </Router>
  
  </>
}
export default App
