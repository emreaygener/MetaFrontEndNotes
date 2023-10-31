import logo from "./logo.svg";
import "./App.css";
// import ReactPlayer from "react-player"; //You can use this import statement to get the entire packages functionality.
import ReactPlayer from "react-player/youtube"; //You can use this import statement to reduce the bundle size.

const App = () => {
  return (
    <div>
      <MyVideo />
    </div>
  );
};

const MyVideo = () => {
  // const VidURL="https://www.youtube.com/watch?v=h3qYOFluvi8"; // passing this variable into url prop is also an option
  return (
    <ReactPlayer
      url="https://www.youtube.com/watch?v=h3qYOFluvi8"
      playing={false}
      volume={0.5}
      controls
    />
  );
};

export default App;
