import React from "react";
import logo from "./logo.svg";
import "./App.css";
import { MyNewComponent } from "@nicolad/ui";

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <MyNewComponent text="hello from shared package" />
        <p>
          Edit <code>src/App.tsx</code> and save to reload. Edit{" "}
          <code>src/App.tsx</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React Learn React Learn React
        </a>
      </header>
    </div>
  );
}

export default App;
