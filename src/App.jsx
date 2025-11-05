
import { Route, Routes } from 'react-router-dom'
import './App.css'
import { Home } from './Home'
import About from './About'
import Tutorial from './Tutorial'
import Example from './Example'
import Header from './Header'
import Footer from './Footer'



function App() {
 

  return (
   <>
   <Header />
   <Routes>
    <Route path='/' element={<Home />}/>
    <Route path='/about' element={<About />}/>
    <Route path='/tutorial' element={<Tutorial />}/>
    <Route path='/example' element={<Example />}/>

   </Routes>
   <hr />
   <Footer />
    </>
  )
}

export default App
