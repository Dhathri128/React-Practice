import { useState } from 'react'
import './App.css'
import Variables from './components/variables'
import UseState from './components/UseState'
import PropsState from './components/PropsState'

function App (){
  
  return (
    <div>
      <p>app</p>
     {/* <Variables /> */}
     {/* <UseState /> */}
      <PropsState />
    </div>
  )
}

export default App
