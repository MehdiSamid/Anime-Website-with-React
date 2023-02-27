import {Header ,Footer, Library, MostPopular} from './Sections/index'
import { Home ,  } from './Pages/index'
import {Container} from './Components/index'

import { BrowserRouter as Router , Routes , Route } from 'react-router-dom'

const App = ()=>{
  return <>
  <Router>
    <Header />
    <Container>
      
      <Routes>

        <Route path='/' element={<Home/>} />
        <Route path='most-popular' element={<MostPopular/>} />
        <Route path='Library' element={<Library/>}/>
        

      </Routes>

    </Container>

    <Footer/>
  </Router>
  
  </>
}
export default App
