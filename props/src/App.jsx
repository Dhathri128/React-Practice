

import './App.css'
import Child from './components/Child'
import Destructuring from './components/Destructing';
import ParentPizza from './components/ParentPizza';



const App = () =>{
  const name = "GITA";
  const age = "20";
  const country = "India";
  const Nationality = "Hindu";
  return (
    <div>
        {/*<Child name = {name} age = {age} country = {country}/> */}
        {/*<Destructuring name = {name} age = {age} country = {country} Nationality={Nationality}/>*/}
        <ParentPizza/>
    </div>
  )
};

export default App;
