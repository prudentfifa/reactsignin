import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Navbar from './Component/Hero'
import Hero from './Component/Hero'
import Api from './Component/Api'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
    <Api/>
    </>
  )
}

export default App
