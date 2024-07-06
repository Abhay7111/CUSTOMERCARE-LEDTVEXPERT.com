import { useState } from 'react';
import Nav from './Components/Nav';
import Home from './Components/Home';
import Services from './Components/Services';
import Footer from './Components/Footer';

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
    <div className='w-full h-full absolute z-0'>
               <div className='size-40 relative rounded-full blur-3xl top-botom-animation'></div>
               <div className='size-40 relative rounded-full blur-3xl top-left-animation'></div>
               <div className='size-72 relative rounded-full blur-3xl left-right-animation'></div>
          </div>
    <Nav/>
    <Home/>
    <Services/>
    <Footer/>
    </>
  )
}

export default App
