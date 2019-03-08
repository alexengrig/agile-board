import React, { Component, Fragment } from 'react';
import { Header, TeamList } from '../../components';
import { connect } from 'react-redux';
import { mapTeamsDispatchToProps, mapTeamsStateToProps } from '../../store';

class Teams extends Component {
  componentDidMount() {
    this.props.onFetchTeams();
  }

  render() {
    return (
      <Fragment>
        <Header>Teams</Header>
        <TeamList {...this.props} />
      </Fragment>
    );
  }
}

export default connect(mapTeamsStateToProps, mapTeamsDispatchToProps)(Teams);
