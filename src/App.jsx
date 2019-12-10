import React, { Component } from "react";
import "./App.css";

class App extends Component {
  constructor() {
    super();
    this.state = {
      mosters: [
        { name: "Frankenstein", id: 1 },
        { name: "Dracula", id: 2 },
        { name: "Zombie", id: 3 }
      ]
    };
  }

  render() {
    return (
      <div className="App">
        {this.state.mosters.map(m => (
          <h1 key={m.id}>{m.name}</h1>
        ))}
      </div>
    );
  }
}

export default App;
