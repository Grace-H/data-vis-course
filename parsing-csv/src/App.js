import logo from "./logo.svg";
import "./App.css";
import { useEffect } from "react";
import { csvParse } from "d3";

export default function App() {
  const csvURL =
    "https://gist.githubusercontent.com/Grace-H/6fa383b8274ae4de60bd9a2638455854/raw/namedColorsCSS.csv";

  async function fetchData(url) {
    const response = await fetch(url);
    return await response.text();
  }

  fetchData(csvURL).then((text) => {
    console.log(csvParse(text));
  });

  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header>
    </div>
  );
}
