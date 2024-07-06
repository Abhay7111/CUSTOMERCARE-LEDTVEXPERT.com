import { useState } from 'react';
import Nav from './Components/Nav';
import Home from './Components/Home';
import Services from './Components/Services';
import Footer from './Components/Footer';

function App() {
  const [count, setCount] = useState(0)

  return (
    <div className='overflow-x-hidden'>
    <Nav/>
    <Home/>
    <div className='px-5'>
    <Services/>
    </div>
    <Footer/>
    </div>
  )
}

export default App
