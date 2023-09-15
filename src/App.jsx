import './App.css'
import { Counter } from './Counter'
import userData from "./data.json"

function App() {

  return (
    <>
    <div>
      <h1>Hello</h1>
      <div className='counter-user'>
        <Counter />
        <div>
          {userData.map(e => (
            <p key={e.id}>{e.name}</p>
          ))}
        </div>
      </div>
    </div>
    </>
  )
}

export default App
