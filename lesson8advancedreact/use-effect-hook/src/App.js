import logo from "./logo.svg";
import "./App.css";
import React from "react";

function App() {
  const [toggle, setToggle] = React.useState(false);

  const clickHandler = () => {
    setToggle(!toggle);
  };

  React.useEffect(() => {
    document.title = toggle
      ? `Welcome to Little Lemon`
      : "using the useEffect hook";
  }, [toggle]);

  return (
    <div className="App">
      <h1>Using the useEffect hook</h1>
      <button onClick={clickHandler}>Toggle Message</button>
      {toggle && <h2>Welcome to Little Lemon</h2>}
    </div>
  );
}

export default App;
