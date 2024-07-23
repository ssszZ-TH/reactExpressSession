import { useEffect, useState } from 'react'
import './App.css'

const host='http://localhost:3000'

function App() {
  const [name,setName]=useState('');
  const [msg,setMsg]=useState('');

  const login= (name)=>{
    try{
      fetch(host+'/login', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ name }),
    }).then((response) => {
      console.log(response);
      return response.json();
    }).then((data) => {
      setMsg(data.message);
    })
    }catch (e){
      console.log(e);
    }
  }

  const logout=()=>{
    
  }

  const getcors=()=>{
    console.log('get cors origin from',host);
    fetch(host+'/cors', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
  }).then((response) => {
    console.log(response);
    return response.json();
  }).then((data) => {
    setMsg(data.message);
  })
  }
  useEffect(()=>{
    getcors();
  },[])

  return (
    <>
      <h1>backend response = {msg}</h1>
      <h1>name:{name}</h1>
      <input type="text" onChange={(e)=>setName(e.target.value)}/>
      <button onClick={()=>{login(name)}}>login</button>
      <button onClick={logout}>logout</button>
    </>
  )
}

export default App
