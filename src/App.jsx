import React, { Component } from "react";
import "./App.css";
import { CardList } from "./components/card-list/card-list.component";

class App extends Component {
  constructor() {
    super();
    this.state = {
      mosters: []
    };
  }

  componentDidMount() {
    fetch("https://jsonplaceholder.typicode.com/users")
      .then(res => res.json())
      .then(res => this.setState({ mosters: res }));
  }

  render() {
    return (
      <div className="App">
        <CardList mosters={this.state.mosters} />
      </div>
    );
  }
}

export default App;
