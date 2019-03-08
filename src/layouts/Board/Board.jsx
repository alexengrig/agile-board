import React, { Component } from 'react';
import { Board as BoardContainer } from '../../containers';

class Board extends Component {
  render() {
    return (
      <div>
        <h1>BOARD</h1>
        <main>
          <BoardContainer match={this.props.match} />
        </main>
      </div>
    );
  }
}

export default Board;
