import React, { Component } from 'react';
import { Boards, Teams } from '../../containers';

class Main extends Component {
  render() {
    return (
      <div>
        <h1>MAIN</h1>
        <main>
          <Boards />
          <Teams />
        </main>
      </div>
    );
  }
}

export default Main;
