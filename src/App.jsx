import { useState } from 'react'
import reactLogo from './assets/react.svg'
import './App.css'

function App() {
  const [count, setCount] = useState(0)

  return (
    <div className="App">
      <div>
        {/* <a href="https://vitejs.dev" target="_blank">
          <img src="/vite.svg" className="logo" alt="Vite logo" />
        </a>
        <a href="https://reactjs.org" target="_blank">
          <img src={reactLogo} className="logo react" alt="React logo" />
        </a> */}
      </div>
      <h1>Simple React Counter</h1>
      <div className="card">
        <div className="counter-area">
          <button onClick={() => setCount((count) => count + 1)} className="button-plus">+
          </button>
          <h2 className="counter-number">{count}</h2>
          <button onClick={() => setCount((count) => count - 1)} className="button-minus">-</button>
        </div>
        <button onClick={() => setCount(0)} className="reset-btn">Reset</button>
        {/* <p>
          Edit <code>src/App.jsx</code> and save to test HMR
        </p> */}
      </div>
    </div>
  )
}

export default App
