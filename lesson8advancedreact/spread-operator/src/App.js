import "./App.css";

const Button = ({ type, children, ...buttonProps }) => {
  const className = type === "primary" ? "PrimaryButton" : "SecondaryButton";
  return (
    <button className={`Button ${className}`} {...buttonProps}>
      {children}
    </button>
  );
};

const LoginButton = ({ type, children, ...buttonProps }) => {
  return (
    <Button
      type="secondary"
      {...buttonProps} //Here we are using spread operator to add prop onClick to LoginButton Component
      onClick={() => {
        //Here we are defining onClick function on LoginButton Component which is added after spread operator therefore redefines onclick function sent from App Component
        alert("Logging in!");
      }}
    >
      {children}
    </Button>
  );
};

function App() {
  return (
    <div className="App">
      <header className="Header">Little Lemon Restaurant 🍕</header>
      <Button type="primary" onClick={() => alert("Signing Up!")}>
        Sign up
      </Button>
      <LoginButton
        type="secondary"
        onClick={
          () =>
            alert(
              "Signing Up!"
            ) /* Even though alert function seems to override onClick function here, because spread operator included prop added before defining onClick function on LoginButton Component, this function does not override ocClick function and the result is if you click login alert will display logging in */
        }
      >
        Login
      </LoginButton>
    </div>
  );
}

export default App;
