import React, { Component } from 'react';
import { BoardItem, List } from '..';

class BoardList extends Component {
  render() {
    return (
      <List>
        {this.props.boards.map((board, key) => (<BoardItem key={key} {...board} />))}
      </List>
    );
  }
}

export default BoardList;
