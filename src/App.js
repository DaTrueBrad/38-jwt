import { useState } from "react";
import "./App.css";
import axios from "axios";

function App() {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    axios
      .post("http://localhost:4000/api/login", { username, password })
      .then((res) => {
        console.log(res.data);
        localStorage.setItem("token", res.data);
      })
      .catch((err) => {
        console.error(err);
      });
  };

  const handleAuth = () => {
    let token = localStorage.getItem('token')
    axios
      .post('http://localhost:4000/api/authenticate', {token})
      .then((res) => {
        console.log(res.data)
      })
      .catch((err) => {
        console.error(err)
      })
  }

  return (
    <div className="col-container">
      <form className="App" onSubmit={handleSubmit}>
        <h1>Please Log In</h1>
        <input
          type="text"
          placeholder="username"
          onChange={(e) => setUsername(e.target.value)}
        />
        <input
          type="text"
          placeholder="password"
          onChange={(e) => setPassword(e.target.value)}
        />
        <button>Login</button>
      </form>
      <button onClick={handleAuth}>Auth</button>
    </div>
  );
}

export default App;
