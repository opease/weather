import "./App.css";
import Weather from "./Weather";

function App() {
  return (
    <div className="App">
      <div className="container">
        <Weather defaultCity="Cape Town" />
        <footer>
          This project was coded by{" "}
          <a href="https://github.com/opease" target="_blank" rel="noreferrer">
            Odille Pease
          </a>{" "}
          and is{" "}
          <a
            href="https://github.com/opease/weather"
            target="_blank"
            rel="noreferrer"
          >
            open-sourced on GitHub
          </a>
        </footer>
      </div>
    </div>
  );
}

export default App;
