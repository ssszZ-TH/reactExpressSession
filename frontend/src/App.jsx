import { useState } from 'react'
import './App.css'

function App() {

  const [name,setName]=useState('');

  const login=(name)=>{
    fetch('/api/login', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({name}),
    })
  }

  const logout=()=>{
    fetch('/api/logout', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
    })
  }

  return (
    <>
      this app connect to session api server
      <h>backend response</h>
      <h1>name:{name}</h1>
      <input type="text" onChange={(e)=>setName(e.target.value)}/>
      <button onClick={()=>{login(name)}}>login</button>
      <button onClick={logout}>logout</button>
    </>
  )
}

export default App
