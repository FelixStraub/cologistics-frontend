import React, {Component} from 'react';
import {Route, Switch} from "react-router-dom";
import App from "./App";
import Error from "./Error";

export default class main extends Component {
  render() {
    return (
      <main>
        <Switch>
          <Route exact path='/id/:id' component={App}/>
          <Route path='*' component={Error}/>
        </Switch>
      </main>
    )
  }
}
