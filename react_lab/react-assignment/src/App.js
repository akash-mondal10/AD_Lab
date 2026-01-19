import React, { useState, useEffect } from "react";
import "./App.css";

function App() {

  /* Program 3 */
  const [count, setCount] = useState(0);

  /* Program 4 */
  const [time, setTime] = useState(new Date().toLocaleTimeString());
  useEffect(() => {
    const timer = setInterval(() => {
      setTime(new Date().toLocaleTimeString());
    }, 1000);
    return () => clearInterval(timer);
  }, []);

  /* Program 5 */
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [msg, setMsg] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!username || !password) {
      setMsg("All fields are required!");
    } else {
      setMsg("Login Successful!");
    }
  };

  /* Program 6 */
  const [isLoggedIn, setIsLoggedIn] = useState(false);

  /* Program 2 Data */
  const student = {
    name: "Akash Mondal",
    roll: "CS101",
    branch: "Computer Science"
  };

  return (
    <div className="app">

      {/* Program 1 */}
      <div className="program">
        <div className="program-nav">🟢 Program 1 – Welcome Component</div>
        <div className="card">
          <h3>Welcome to React Application!</h3>
          <p>This is a functional component returning JSX.</p>
        </div>
      </div>

      {/* Program 2 */}
      <div className="program">
        <div className="program-nav">🟢 Program 2 – Parent → Child Props</div>
        <div className="card">
          <div className="grid">
            <div className="subcard">
              <h4>Parent Data</h4>
              <p>Name: {student.name}</p>
              <p>Roll: {student.roll}</p>
              <p>Branch: {student.branch}</p>
            </div>

            <div className="subcard">
              <h4>Child Output</h4>
              <Child {...student} />
            </div>
          </div>
        </div>
      </div>

      {/* Program 3 */}
      <div className="program">
        <div className="program-nav">🟢 Program 3 – Counter (useState)</div>
        <div className="card">
          <div className="counter">{count}</div>
          <div style={{ textAlign: "center" }}>
            <button onClick={() => setCount(count + 1)}>Increase</button>
            <button className="decrease" onClick={() => setCount(count - 1)}>
              Decrease
            </button>
            <button className="reset" onClick={() => setCount(0)}>
              Reset
            </button>
          </div>
        </div>
      </div>

      {/* Program 4 */}
      <div className="program">
        <div className="program-nav">🟢 Program 4 – Digital Clock (useEffect)</div>
        <div className="card">
          <div className="clock">{time}</div>
        </div>
      </div>

      {/* Program 5 */}
      <div className="program">
        <div className="program-nav">🟢 Program 5 – Login Form</div>
        <div className="card">
          <form onSubmit={handleSubmit}>
            <input
              type="text"
              placeholder="Username"
              value={username}
              onChange={(e) => setUsername(e.target.value)}
            /><br />
            <input
              type="password"
              placeholder="Password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
            /><br />
            <button type="submit">Login</button>
          </form>
          <p>{msg}</p>
        </div>
      </div>

      {/* Program 6 */}
      <div className="program">
        <div className="program-nav">🟢 Program 6 – Conditional Rendering</div>
        <div className="card">
          <h3>{isLoggedIn ? "Welcome User" : "Please Login"}</h3>
          <button onClick={() => setIsLoggedIn(!isLoggedIn)}>
            {isLoggedIn ? "Logout" : "Login"}
          </button>
        </div>
      </div>

    </div>
  );
}

/* Child Component */
function Child(props) {
  return (
    <>
      <p>{props.name}</p>
      <p>{props.roll}</p>
      <p>{props.branch}</p>
    </>
  );
}

export default App;
