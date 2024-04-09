import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import AddTodo from './features/components/AddTodo'
import Todos from './features/components/Todos'

function App() {
  
  return (
    <>
     <h1 >Todo</h1>
      <AddTodo />
      <Todos />
    </>
  )
}

export default App
