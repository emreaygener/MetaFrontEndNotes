import React from "react";
import "./App.css";

export default function App() {
  const [user, setUser] = React.useState([]);

  function fetchData() {
    fetch("https://randomuser.me/api/?results=1")
      .then((response) => response.json())
      .then((data) => setUser(data));
  }

  React.useEffect(() => {
    fetchData();
  }, []);

  return Object.keys(user).length > 0 ? (
    <div>
      <h1>Data returned</h1>
      <h2>First Name: {user.results[0].name.first}</h2>
      <h2>Last Name: {user.results[0].name.last}</h2>
      <img src={user.results[0].picture.large} alt="" />
    </div>
  ) : (
    <div>
      <h1>Data pending...</h1>
    </div>
  );
}
