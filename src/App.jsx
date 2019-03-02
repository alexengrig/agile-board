import React, { Component } from 'react';
import { Provider } from 'react-redux';
import configureStore from './store';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import routes from './routes';

const store = configureStore();

class App extends Component {
  render() {
    return (
      <Provider store={store}>
        <BrowserRouter>
          <Switch>
            {routes.map((route, index) => (
              <Route key={index} {...route} />
            ))}
          </Switch>
        </BrowserRouter>
      </Provider>
    );
  }
}

export default App;
