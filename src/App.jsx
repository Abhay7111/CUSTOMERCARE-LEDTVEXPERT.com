import { useState } from 'react';
import Home from './Components/Home';
import Nav from './Components/Nav';
import Footer from './Components/Footer';

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
    <Nav/><Home/><Footer/>
    </>
  )
}

export default App
