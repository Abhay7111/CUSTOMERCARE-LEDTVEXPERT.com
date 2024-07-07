import { useState } from 'react';
import Nav from './Components/Nav';
import Home from './Components/Home';
import Services from './Components/Services';
import Footer from './Components/Footer';
import Aboutus from './Components/Aboutus';

function App() {
  const [count, setCount] = useState(0)

  return (
    <div className='overflow-x-hidden'>
    <Nav/>
    <Home/>
    <div className=' bg-[#FFD3B6] w-full flex items-center justify-center p-5'>
      <Aboutus/>
    </div>
    <div className='px-5'>
    <Services/>
    </div>
    <Footer/>
    </div>
  )
}

export default App
