import React, { Component } from 'react';
import { Provider } from 'react-redux';
import configureStore from './store';
import { HashRouter as Router, Route, Switch } from 'react-router-dom';
import routes from './routes';

const store = configureStore();

class App extends Component {
  render() {
    return (
      <Provider store={store}>
        <Router>
          <Switch>
            {routes.map((route, key) => (
              <Route key={key} {...route} />
            ))}
          </Switch>
        </Router>
      </Provider>
    );
  }
}

export default App;
