import React, { Component } from "react";
import { Route } from "react-router-dom";
import Start from "./Start";
import Payments from "./Payments";
import Offers from "./Offers";
import Issues from "./Issues";

class Page extends Component {
  state = {};
  render() {
    return (
      <>
        <Route path="/" exact component={Start} />
        <Route path="/payments" exact component={Payments} />
        <Route path="/offers" exact component={Offers} />
        <Route path="/issues" exact component={Issues} />
      </>
    );
  }
}

export default Page;
