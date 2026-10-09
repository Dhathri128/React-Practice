

import './App.css'
import Child from './components/Child'

const App = () =>{
  const name = "GITA";
  const age = "20";
  const country = "India";
  return (
    <div>
    <Child name = {name} age = {age} country = {country}/>
    </div>
  )
};

export default App;
