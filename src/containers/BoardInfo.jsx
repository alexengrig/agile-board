import React, { Component } from 'react';
import { connect } from 'react-redux';
import { mapBoardStateToProps, mapBoardDispatchToProps } from '../store';

class BoardInfo extends Component {
  componentDidMount() {
    this.props.onFetchBoard(this.props.match.params.boardId);
  }

  render() {
    const { id = 'none', name = 'none', color = 'gray' } = this.props;

    return (
      <div style={{ backgroundColor: color }}>
        <p>ID: {id}</p>
        <p>Name: {name}</p>
      </div>
    );
  }
}

export default connect(mapBoardStateToProps, mapBoardDispatchToProps)(BoardInfo);
