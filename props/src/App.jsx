

import './App.css'
import Child from './components/Child'
import Destructuring from './components/Destructing';


const App = () =>{
  const name = "GITA";
  const age = "20";
  const country = "India";
  const Nationality = "Hindu";
  return (
    <div>
        {/*<Child name = {name} age = {age} country = {country}/> */}
        <Destructuring name = {name} age = {age} country = {country} Nationality={Nationality}/>
    </div>
  )
};

export default App;
