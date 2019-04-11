import React, { Component } from 'react';
import './App.css';
import {NavBar} from "./components/layout/NavBar";
import {ServerListItem} from "./components/server/ServerListItem";
import {ServerListHeader} from "./components/server/ServerListHeader";

class App extends Component {
  render() {
      return (
          <div className="App">
              <NavBar/>
              <div className="container">
                  <ServerListHeader/>
                  <ul className="list-group">
                      <ServerListItem/>
                      <ServerListItem/>
                      <ServerListItem/>
                      <ServerListItem/>
                      <ServerListItem/>
                      <ServerListItem/>
                      <ServerListItem/>
                  </ul>
              </div>
          </div>
    );
  }
}

export default App;
