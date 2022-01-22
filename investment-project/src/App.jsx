import { useState } from 'react'
import logo from './logo.svg'
import './App.css'
//import investmentform component
import InvestmentForm from './components/InvestmentForm';
//import WelcomePage component
import WelcomePage from './components/WelcomePage';

function App() {
  const [count, setCount] = useState(0)

  return (
    <div className="App">
      {/* <InvestmentForm /> */}
      <WelcomePage />
    </div>
  )
}

export default App
