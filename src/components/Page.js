import React, { Component } from "react";
import { Route } from "react-router-dom";
import Start from "./Start";

class Page extends Component {
  state = {};
  render() {
    return (
      <>
        <Route path="/" exact component={Start} />
      </>
    );
  }
}

export default Page;
