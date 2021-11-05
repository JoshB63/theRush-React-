import React, { Component } from "react";
import HomePage from "./Components/Homepage";
import "./App.css";

class App extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <div>
        <HomePage />
      </div>
    );
  }
}

export default App;
