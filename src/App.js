import "./App.css";
import Weather from "./Weather";

function App() {
  return (
    <div className="App">
      <div className="container">
        <Weather />
        <footer>
          This project was coded by{" "}
          <a href="https://github.com/opease" target="_blank" rel="no-referrer">
            Odille Pease
          </a>{" "}
          and is{" "}
          <a
            href="https://github.com/opease/weather"
            target="_blank"
            rel="no-referrer"
          >
            open-sourced on GitHub
          </a>
        </footer>
      </div>
    </div>
  );
}

export default App;
