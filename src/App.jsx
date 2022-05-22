import { useState } from 'react'
import logo from './logo.svg'
import './App.css'
import ReactForm from './Components/ReactForm'

function App() {
  const [count, setCount] = useState(0)

  return (
    <div className="App">
       <ReactForm/>
    </div>
  )
}

export default App
