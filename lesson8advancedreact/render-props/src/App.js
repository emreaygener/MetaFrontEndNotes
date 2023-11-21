import "./App.css";
import { useState, useEffect } from "react";

const DataFetcher = ({ render, url }) => {
  const [data, setData] = useState([]);

  useEffect(() => {
    if (url.includes("desserts")) {
      setData(["Doughnut 🍩", "Cookie 🍪", "Cake 🍰", "Ice Cream 🍦"]);
    } else {
      setData(["Beer 🍺", "Wine 🍷", "Margarita 🍸"]);
    }
  }, [url]);

  return render(data);
};

const Desserts = () => {
  return (
    <DataFetcher
      url="https://littlelemon/desserts"
      render={(data) => (
        <>
          <p>{data.length} desserts</p>
          <ul>
            {data.map((dessert) => (
              <ul>{dessert}</ul>
            ))}
          </ul>
        </>
      )}
    />
  );
};

const Drinks = () => {
  return (
    <DataFetcher
      url="https://littlelemon/drinks"
      render={(data) => (
        <>
          <p>{data.length} drinks</p>
          <ul>
            {data.map((drink) => (
              <ul>{drink}</ul>
            ))}
          </ul>
        </>
      )}
    />
  );
};

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <h1>Little Lemon Restaurant 🍕</h1>
        <Desserts />
        <Drinks />
      </header>
    </div>
  );
}

export default App;
