import './App.css'
import userData from "./data.json"

function App() {

  return (
    <>
    <div>
      <h1>Hello</h1>
      {userData.map(e => (
        <p key={e.id}>{e.name}</p>
      ))}
    </div>
    </>
  )
}

export default App
