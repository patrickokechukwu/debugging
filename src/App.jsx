import { useState } from 'react'
import './App.css'
import UserList from './components/UserList'

function App() {
  const [count, setCount] = useState(300)

  return (
    <>
      <UserList />
    </>
  )
}

export default App
