import React, { Component } from "react";
import { HashRouter, Route, Switch } from "react-router-dom";
import routes from "./routes";

class App extends Component {
  render() {
    return (
      <HashRouter>
        <Switch>
          {routes.map((route, index) => (
            <Route
              key={index}
              path={route.pathname}
              component={route.component}
            />
          ))}
        </Switch>
      </HashRouter>
    );
  }
}

export default App;
