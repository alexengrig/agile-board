import React, { Component } from 'react';
import { Team as TeamContainer } from '../../containers';

class Team extends Component {
  render() {
    return (
      <div>
        <h1>TEAM</h1>
        <main>
          <TeamContainer match={this.props.match} />
        </main>
      </div>
    );
  }
}

export default Team;
