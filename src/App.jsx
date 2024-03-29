import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Comp from './Comp.jsx'
import Pokemon from './pokemon.jsx'

function App() {
  // mostrar a través de count, modificar a través de setCount
  const [count, setCount] = useState(0)

  return (
    <>
    <Comp param="Pablito"></Comp>
    <Pokemon></Pokemon>

    <button>Hazme click</button>

      <div>
        <a href="https://vitejs.dev" target="">
          <img src={viteLogo} className="logo" alt="Vite logo" />
        </a>
        <a href="https://react.dev" target="">
          <img src={reactLogo} className="logo react" alt="React logo" />
        </a>
      </div>
      <h1>Vite + React</h1>
      <div className="card">
        <button onClick={() => setCount((count) => count + 1)}>
          count is {count}
        </button>
        <p>
          Edit <code>src/App.jsx</code> and save to test HMR
        </p>
      </div>
      <p className="read-the-docs">
        Click on the Vite and React logos to learn more
      </p>
      <h2>Mas contenido</h2>
    </>
  )
}

export default App
