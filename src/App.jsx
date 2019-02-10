import React, { Component } from 'react';
import { HashRouter, Route, Switch } from 'react-router-dom';
import routers from './routers';

class App extends Component {
  render() {
    return (
      <HashRouter>
        <Switch>
          {routers.map((router, index) => (
            <Route key={index} path={router.pathname} component={router.component} />
          ))}
        </Switch>
      </HashRouter>
    );
  }
}

export default App;
