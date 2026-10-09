//import { useState } from 'react';
import viteLogo from './assets/vite.svg';
import './App.css'
import Home from './components/Home'
import About from './components/About'
import Contact from './components/Contact';




function App(){
   // const[count, setCount] = useState(0)
    return(
       <div>
         <h1>Karanam Dhathri</h1>
          <p>from here onward there was section as there in the designing protofolio</p>
         <Home/>
         <About/>
         <Contact/>
       </div>
    )
}

export default App

