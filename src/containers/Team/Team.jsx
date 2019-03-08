import React, { Component } from 'react';
import { connect } from 'react-redux';
import { mapTeamDispatchToProps, mapTeamStateToProps } from '../../store';

class Team extends Component {
  componentDidMount() {
    this.props.onFetchTeam(this.props.match.params.teamId);
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

export default connect(mapTeamStateToProps, mapTeamDispatchToProps)(Team);
