import { useState } from 'react'
import logo from './logo.svg'
import './App.css'
//import investmentform component
import InvestmentForm from './components/InvestmentForm';

function App() {
  const [count, setCount] = useState(0)

  return (
    <div className="App">
      <InvestmentForm />
    </div>
  )
}

export default App
