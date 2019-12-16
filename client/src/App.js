import React, { Component } from "react";
import axios from "axios";
import "./App.css";

class App extends Component {
  constructor() {
    super();
    this.state = {
      data: []
    };
  }

  componentDidMount() {
    axios
      .get("http://localhost:5000/api/players")
      .then(res => {
        this.setState(res.data);
      })
      .catch(err => {
        console.log("Error: ", err);
      });
  }

  render() {
    console.log(this.state);
    return <div className="App"></div>;
  }
}

export default App;
