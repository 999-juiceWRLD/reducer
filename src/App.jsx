import './App.css'
import { Counter } from './Counter'
import userData from "./data.json"
import { useReducer } from 'react'

function App() {

  const reducerFunc = (users, action) => {
    const userDataDiv = document.querySelector('div.user-data')
    const showButton = document.getElementById('show-button')
    switch (action.type) {
      case 'HIDE':
        userDataDiv.classList.add('user-data-hide')
        showButton.style.display = 'block'
        return []
      case 'SHOW':
        userDataDiv.classList.remove('user-data-hide')
        showButton.style.display = 'none'
        users = userData
        return users
    }
  }

  const [state, dispatch] = useReducer(reducerFunc, userData)

  return (
    <>
    <div>
      <h1>Hello</h1>
      <div className='counter-user'>
        <Counter />
        <div className='user-data'>
          {state.map(e => (
            <p key={e.id}>{e.name}</p>
          ))}
          <button onClick={() => { dispatch({ type: 'HIDE' }) }}>click to remove</button>
        </div>
          <button id='show-button' style={{ display: 'none' }} onClick={() => { dispatch({ type: 'SHOW' }) }}>click to show</button>
      </div>
    </div>
    </>
  )
}

export default App
