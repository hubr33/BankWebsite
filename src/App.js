import React, { Component } from "react";
import "./App.css";
import { BrowserRouter as Router } from "react-router-dom";
import Header from "./components/Header";
import Page from "./components/Page";

class App extends Component {
  state = {
    bankName: "National Bank",
    fullname: "Jan Kowalski",
    inicials: "JK",
  };
  render() {
    return (
      <Router>
        <Header state={this.state} />
        <Page state={this.state} />
      </Router>
    );
  }
}

export default App;
