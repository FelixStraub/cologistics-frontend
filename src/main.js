import React, { Component } from 'react';
import {Route, Switch} from "react-router-dom";
import App from "./App";

export default class main extends Component {
  render() {
    return (
        <main>
            <Switch>
                <Route exact path='/1' component={App}/>
                <Route exact path='/2' component={App}/>
            </Switch>
        </main>
    )
  }
}
