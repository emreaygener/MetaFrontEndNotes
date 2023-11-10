import "./App.css";
import { useState } from "react";

export default function App() {
  const [restaurantName, setRestaurantName] = useState("Lemon");

  function updateRestaurantName() {
    setRestaurantName("Little Lemon");
  }

  const [greeting, setGreeting] = useState({
    greet: "Hello",
    place: "World",
  });
  console.log(greeting, setGreeting);

  function updateGreeting() {
    //Updating with arrow functions
    setGreeting((prevState) => {
      return { ...prevState, place: "World-Wide Web" };
    });
  }

  return (
    <div>
      <UpdateUseStateCorrectWay />
      <h1>{restaurantName}</h1>
      <button onClick={updateRestaurantName}>Update Restaurant Name</button>
      <h1>
        {greeting.greet}, {greeting.place}
      </h1>
      <button onClick={updateGreeting}>Update greeting</button>
    </div>
  );
}

export function UpdateUseStateCorrectWay() {
  const [greeting, setGreeting] = useState({ greet: "Hello, World" });
  console.log(greeting, setGreeting);

  function updateGreeting() {
    const newGreeting = { ...greeting };
    newGreeting.greet = "Hello, World-Wide Web";
    setGreeting(newGreeting);
  }

  return (
    <div>
      <h1>{greeting.greet}</h1>
      <button onClick={updateGreeting}>Update greeting</button>
    </div>
  );
}
