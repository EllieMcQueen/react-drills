import React, { Component } from 'react';
import "./App.css";
import Image from "./image.js";

class App extends Component {
  render() {
    return (
      <div className="App">
        <Image url={"https://s23444.pcdn.co/wp-content/uploads/2019/05/Fairy-Glen-Skye-unsp.jpg.optimal.jpg"} />
      </div>
    );
  }
}


export default App;
