import logo from "./logo.svg";
import "./App.css";

function Logo(props) {
  const userPic = <img src={logo} />;
  return userPic;
}

function App() {
  return (
    <div>
      <h1>Hello World!</h1>
      <Logo />
    </div>
  );
}

export default App;
