import React, { Component } from 'react';
import BoardInfo from '../containers/BoardInfo';

class Board extends Component {
  render() {
    return (
      <div>
        <h1>BOARD</h1>
        <BoardInfo match={this.props.match} />
        <main>
          content
        </main>
      </div>
    );
  }
}

export default Board;
