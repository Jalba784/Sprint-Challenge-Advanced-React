import React, { Component } from "react";
import axios from "axios";
import "./App.css";
import PlayerList from "./components/PlayerList";

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
        // this.setState(res.data);
        this.setState({data: res.data});
      })
      .catch(err => {
        console.log("Error: ", err);
      });
  }

  render() {
    return (
      <div className="App">
        <PlayerList playerData={this.state.data} />
      </div>
    )
  }
}

export default App;
