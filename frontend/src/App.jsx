import { useEffect, useState } from "react";
import "./App.css";

import axios from 'axios';

axios.defaults.withCredentials = true;

const App = () => {
  const [name, setName] = useState('');

  const checkLogin = async () => {
    try {
      const response = await axios.get('http://localhost:5000/checkLogin');
      // setName(response.data);
      console.log(response.data);
    } catch (error) {
      console.error('Error:', error);
    }
  };

  const handleLogin = async (name) => {
    try {
      const response = await axios.post('http://localhost:5000/login', { name: name });
      console.log(response.data);
      checkLogin();
    } catch (error) {
      console.error('Error:', error);
    }
  };

  const handleLogout = async () => {
    try {
      const response = await axios.post('http://localhost:5000/logout');
      console.log(response.data);
      // setName('');
    } catch (error) {
      console.error('Error:', error);
    }
  };


  return (
    <>
      <h1>backend response =</h1>
      <h1>name:{name}</h1>
      <input type="text" onChange={(e) => setName(e.target.value)} />
      <button
        onClick={() => {
          handleLogin(name);
        }}
      >
        login
      </button>
      <button onClick={handleLogout}>logout</button>
      <button onClick={checkLogin}>checkLogin</button>
    </>
  );
}

export default App;
