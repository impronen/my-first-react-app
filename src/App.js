import { useState } from "react";
import "./App.css";
import Hedy from "./components/User";
import Bio from "./components/Bio";

/* import MyButton from "./components/Button"; */

function App() {
  const [count, setCount] = useState(0);

  function handleClick() {
    setCount(count + 1);
  }

  return (
    <div className="main-body">
      <h1>Counters that update together</h1>
      <MyButton count={count} onClick={handleClick} />
      <MyButton count={count} onClick={handleClick} />

      <Bio />
    </div>
  );
}

function MyButton({ count, onClick }) {
  return <button onClick={onClick}>Clicked {count} times</button>;
}
export default App;
