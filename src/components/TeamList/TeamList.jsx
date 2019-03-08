import React, { Component } from 'react';
import { List, TeamItem } from '..';

class TeamList extends Component {
  render() {
    return (
      <List>
        {this.props.teams.map((team, key) => (<TeamItem key={key} {...team} />))}
      </List>
    );
  }
}

export default TeamList;
