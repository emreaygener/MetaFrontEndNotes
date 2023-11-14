import "./App.css";
import React from "react";

function App() {
  const formInputRef = React.useRef(null);

  const focusInput = () => {
    formInputRef.current.focus();
  };

  return (
    <>
      <h1>Using useRef to access underlying DOM</h1>
      <input type="text" ref={formInputRef} />
      <button onClick={focusInput}>Focus Input</button>
    </>
  );
}

export default App;
