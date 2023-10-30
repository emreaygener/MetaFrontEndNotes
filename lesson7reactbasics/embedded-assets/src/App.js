import logo from "./logo.svg";
import "./App.css";
import rooftops from "./assets/images/central-park.jpg";

function App() {
  const randomImageURL = "https://picsum.photos/400/265";
  return (
    <div className="App">
      <h1>Task: Add three images with some styling</h1>
      <img
        height={200}
        src={rooftops}
        alt="An image of a rooftop in New York"
      />
      <img
        height={200}
        src={require("./assets/images/central-park.jpg")}
        alt="An image of a rooftop in New York"
      />
      <img
        height={200}
        src={randomImageURL}
        alt="An image of a rooftop in New York"
      />
    </div>
  );
}

export default App;
