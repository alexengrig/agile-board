import React, { Component, Fragment } from 'react';
import { BoardList, Header } from '../../components';
import { connect } from 'react-redux';
import { mapBoardsDispatchToProps, mapBoardsStateToProps } from '../../store';

class Boards extends Component {
  componentDidMount() {
    this.props.onFetchBoards();
  }

  render() {
    return (
      <Fragment>
        <Header>Boards</Header>
        <BoardList {...this.props} />
      </Fragment>
    );
  }
}

export default connect(mapBoardsStateToProps, mapBoardsDispatchToProps)(Boards);
