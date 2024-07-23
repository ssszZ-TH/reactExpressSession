import { useEffect, useState } from "react";
import "./App.css";

const BACKEND = "http://localhost:5000";

function App() {
  const [name, setName] = useState("");
  const [msg, setMsg] = useState("");

  const login = (name) => {
    try {
      const requestOptions = {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ name: name }),
      };
      fetch(BACKEND + "/login", requestOptions)
    } catch (e) {
      console.log(e);
    }
  };

  const logout = () => {
    try {
      fetch(BACKEND + "/logout", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
      });
      console.log("logout");
    } catch (e) {
      console.log(e);
    }
  };

  const checkLogin = () => {
    try {
      fetch(BACKEND + "/checkLogin", {
        method: "GET",
        headers: {
          "Content-Type": "application/json",
        },
      }).then((response) => {
        console.log(response);
      });
    } catch (e) {
      console.log(e);
    }
  };

  return (
    <>
      <h1>backend response = {msg}</h1>
      <h1>name:{name}</h1>
      <input type="text" onChange={(e) => setName(e.target.value)} />
      <button
        onClick={() => {
          login(name);
        }}
      >
        login
      </button>
      <button onClick={logout}>logout</button>
      <button onClick={checkLogin}>checkLogin</button>
    </>
  );
}

export default App;
