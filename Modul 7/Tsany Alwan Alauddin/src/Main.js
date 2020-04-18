import React, { Component } from "react";
import { Route, NavLink, HashRouter } from "react-router-dom";
import Home from "./Home";
import About from "./About";
// import Contact from "./Contact";
import Store from "./Store";
class Main extends Component {
  render() {
    return (
      <HashRouter>
        <div>
          <h1 className="title">Chelsea Store</h1>
          <h3 className="subtitle">Merchandise untuk Chelsea Fans</h3>
          <ul className="header">
            <li><NavLink to="/">Home</NavLink></li>
            <li><NavLink to="/store">Store</NavLink></li>
            <li><NavLink to="/about">About</NavLink></li>
          </ul>
          <div className="content">
            <Route exact path="/" component={Home} />
            <Route exact path="/store" component={Store} />
            <Route path="/about" component={About} />
          </div>
        </div>
      </HashRouter>
    );
  }
}
export default Main;